function alterarModo() {
  const body = document.body;
  const btn = document.getElementById("alterarModo");
  body.classList.toggle("bg-dark");
  body.classList.toggle("text-light");
  body.classList.toggle("bg-light");
  body.classList.toggle("text-dark");
  if (body.classList.contains("bg-dark")) {
    btn.classList.remove("btn-outline-dark");
    btn.classList.add("btn-outline-light");
    btn.textContent = "Tema Claro";
  } else {
    btn.classList.remove("btn-outline-light");
    btn.classList.add("btn-outline-dark");
    btn.textContent = "Tema Escuro";
  }
}