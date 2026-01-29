//Cria um novo elemento Li para a lista de transações, adicionando as informações e alterando classes do css
function criarTransacaoElemento(transacao) {
  const li = document.createElement("li");
  li.classList.add("transaction-item", transacao.type);
  li.id = transacao.id;

  const description = document.createElement("h4");
  description.textContent = transacao.description;

  const amount = document.createElement("h4");
  amount.textContent = transacao.amount;
  amount.classList.add("amount", transacao.type);

  const type = document.createElement("h4");
  type.textContent = transacao.type;

  const category = document.createElement("h4");
  category.textContent = transacao.category;

  const date = document.createElement("h4");
  date.textContent = transacao.date;

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.innerText = "🖊️";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerText = "✖️";

  li.append(description, amount, type, category, date, editBtn, deleteBtn);
  document.querySelector("#transactionsList").appendChild(li);
}

//Utiliza um get para a API retornar todas as transações e passar para a função de criar elementos para
// adicionar isso no html.
async function getTransacoes() {
  try {
    const response = await fetch("http://localhost:3000/transacoes").then(
      (tr) => tr.json(),
    );
    document.querySelector("#transactionsList").innerHTML = "";
    response.forEach(criarTransacaoElemento);
    Array.from(document.getElementsByClassName("empty-message")).forEach(
      (e) => {
        e.classList.remove("empty-message");
        e.innerText = "";
      },
    );
  } catch (err) {
    console.log(err);
  }
}
const today = new Date().toISOString().split("T")[0];
document.getElementById("date").value = today;

getTransacoes();

const form = document.getElementById("transactionForm");

//Adiciona uma nova transação e atualiza a lista de transações

form.addEventListener("submit", (e) => {
  e.preventDefault();

  async function submitTransacao() {
    const transation = {
      description: document.getElementById("description").value,
      amount: document.getElementById("amount").value,
      type: document.getElementById("type").value,
      category: document.getElementById("category").value,
      date: document.getElementById("date").value,
    };

    console.log(transation);

    try {
      const response = await fetch("http://localhost:3000/transacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transation),
      });
      getTransacoes(response);
      // form.reset();
      document.getElementById("date").value = today;
    } catch (err) {
      console.log(err);
    }
  }
  submitTransacao();
});

async function deleteTransicao(id) {
  try {
    const response = await fetch(`http://localhost:3000/transacoes/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    console.error("Erro na requisição DELETE:", err);
  }
}

document.querySelector("#transactionsList").addEventListener("click", (e) => {
  // Verifica se o elemento clicado tem a classe 'delete-btn'
  if (e.target.classList.contains("delete-btn")) {
    const liPai = e.target.parentElement;
    const id = liPai.id;

    console.log("Deletando ID:", id);
    deleteTransicao(id).then(() => {
      liPai.remove(); // Remove do HTML após sucesso na API
    });
  } else if (e.target.classList.contains("edit-btn")) {
    const liPai = e.target.parentElement;
    const campos = liPai.querySelectorAll("h4");
    const isEditing = e.target.innerText === "Salvar";

    if (!isEditing) {
      campos.forEach((h4) => {
        const input = document.createElement("input");
        input.value = h4.innerText;
        // Salva a classe original para não perder o estilo
        input.className = h4.className;
        h4.replaceWith(input);
      });
      e.target.innerText = "✅";
    }
  }
});

async function editTransicao(id) {}
