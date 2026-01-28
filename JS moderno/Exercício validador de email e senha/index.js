const form = document.querySelector("form");
const senhaInput = document.querySelector("#senha");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Objeto centralizado com as exigências de senha
const exigenciasSenha = {
  minimo: { regex: /.{8,}/, label: "Mínimo 8 caracteres" },
  maiuscula: { regex: /[A-Z]/, label: "Letra maiúscula" },
  minuscula: { regex: /[a-z]/, label: "Letra minúscula" },
  numero: { regex: /\d/, label: "Número" },
  simbolo: {
    regex: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
    label: "Caractere especial",
  },
};

// Função simplificada para verificar exigências
function verificarExigencias(senha) {
  Object.entries(exigenciasSenha).forEach(([chave, { regex }]) => {
    const elemento = document.querySelector(`#exigencia-${chave}`);
    const valido = regex.test(senha);

    elemento.classList.toggle("ativa", valido);
    elemento.querySelector(".icon").textContent = valido ? "✓" : "✗";
  });
}

// Função para validar se todas as exigências são atendidas
function senhaValida(senha) {
  return Object.values(exigenciasSenha).every(({ regex }) => regex.test(senha));
}

// Validação em tempo real
senhaInput.addEventListener("input", (e) =>
  verificarExigencias(e.target.value),
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValido = emailRegex.test(form.email.value);
  const senhaValidaCheck = senhaValida(form.senha.value);

  if (emailValido && senhaValidaCheck) {
    alert("Formulário enviado com sucesso!");
    form.reset();
    verificarExigencias("");
  } else {
    alert("Email ou senha inválidos. Por favor, verifique e tente novamente.");
  }
});
