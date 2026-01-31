//Cria um novo elemento Li para a lista de transações, adicionando as informações e alterando classes do css
function criarTransacaoElemento(transacao) {
  const li = document.createElement("li");
  li.classList.add("transaction-item", transacao.type);
  li.id = transacao.id;

  const description = document.createElement("h4");
  description.textContent = transacao.description;
  description.id = `description${transacao.id}`;

  const amount = document.createElement("h4");
  amount.textContent = transacao.amount;
  amount.classList.add("amount", transacao.type);
  amount.id = `amount${transacao.id}`;

  const type = document.createElement("h4");
  type.textContent = transacao.type;
  type.id = `type${transacao.id}`;

  const category = document.createElement("h4");
  category.textContent = transacao.category;
  category.id = `category${transacao.id}`;

  const date = document.createElement("h4");
  date.textContent = transacao.date;
  date.id = `date${transacao.id}`;

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
    //Verifica se existe alguma transação e oculta a div que diz "nenhuma transação"
    if (response[0]) {
      document.getElementById("empty-message").style.display = "none";
    } else if (!response[0]) {
      document.getElementById("empty-message").style.display = "block";
    }
  } catch (err) {
    console.log(err);
  }
}
const today = new Date().toISOString().split("T")[0];
document.getElementById("date").value = today;

getTransacoes();
updateInfo();

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
      getTransacoes();
      updateInfo();
      form.reset();
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
      getTransacoes(); // Se não tiver transações, adiciona a mensagem 'nenhuma transação"
      updateInfo(document.getElementById("empty-message"));
    });
  } else if (e.target.classList.contains("edit-btn")) {
    const liPai = e.target.parentElement;
    const campos = liPai.querySelectorAll("h4");
    const inputs = liPai.querySelectorAll("input");
    const isEditing = e.target.innerText === "✅";

    if (!isEditing) {
      campos.forEach((h4) => {
        const input = document.createElement("input");
        input.value = h4.innerText;
        // Salva a classe original para não perder o estilo
        input.className = h4.className;
        input.id = h4.id;
        h4.replaceWith(input);
      });
      e.target.innerText = "✅";
    } else if (isEditing) {
      const transation = {
        id: liPai.id,
        description: document.getElementById(`description${liPai.id}`).value,
        amount: document.getElementById(`amount${liPai.id}`).value,
        type: document.getElementById(`type${liPai.id}`).value,
        category: document.getElementById(`category${liPai.id}`).value,
        date: document.getElementById(`date${liPai.id}`).value,
      };
      editTransicao(transation);
      inputs.forEach((input) => {
        const h4 = document.createElement("h4");
        h4.innerText = input.value;
        // Salva a classe original para não perder o estilo
        h4.className = input.className;
        h4.id = input.id;
        input.replaceWith(h4);
      });
      e.target.innerText = "🖊️";
      setTimeout(() => updateInfo(), 100);
    }
  }
});

async function editTransicao(transation) {
  try {
    const response = await fetch(
      `http://localhost:3000/transacoes/${transation.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transation),
      },
    );
  } catch (err) {
    console.log(err);
  }
}

async function updateInfo(emptyDiv) {
  const saldo = document.getElementById("balance");
  const despesas = document.getElementById("totalExpense");
  const receitas = document.getElementById("totalIncome");
  saldo.value = "0,00";
  receitas.value = "0,00";
  despesas.value = "0,00";
  function updateHTML() {
    saldo.innerText = `R$ ${saldo.value}`;

    receitas.innerText = `R$ ${receitas.value}`;

    despesas.innerText = `R$ ${despesas.value}`;
  }
  try {
    const response = await fetch("http://localhost:3000/transacoes").then(
      (tr) => tr.json(),
    );
    let receitaTotal = 0;
    let despesaTotal = 0;
    let saldoTotal = 0;
    response.forEach((r) => {
      if (r.type === "Receita") {
        receitaTotal += Number(r.amount);
        receitas.value = receitaTotal;
        saldoTotal += Number(r.amount);
        saldo.value = saldoTotal;
      } else if (r.type === "Despesa") {
        despesaTotal += Number(r.amount);
        despesas.value = despesaTotal;
        saldoTotal -= Number(r.amount);
        saldo.value = saldoTotal;
      }
      updateHTML();
    });
    if (emptyDiv.style.display === "block") {
      saldo.value = "0,00";
      despesas.value = "0,00";
      receitas.value = "0,00";
      updateHTML();
    }
  } catch (err) {
    console.log(err);
  }
}
