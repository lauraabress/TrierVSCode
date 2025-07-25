function todos() {
    mostrarPorClasse("livro");
    mostrarPorClasse("roupa");
    mostrarPorClasse("comida");
    document.getElementById("text-produtos").innerText = "Produtos";
}

function livros() {
    mostrarPorClasse("livro");
    esconderPorClasse("roupa");
    esconderPorClasse("comida");
    document.getElementById("text-produtos").innerText = "Livros";
}

function roupas() {
    esconderPorClasse("livro");
    mostrarPorClasse("roupa");
    esconderPorClasse("comida");
    document.getElementById("text-produtos").innerText = "Roupas";
}

function comidas() {
    esconderPorClasse("livro");
    esconderPorClasse("roupa");
    mostrarPorClasse("comida");
    document.getElementById("text-produtos").innerText = "Comidas";
}

function mostrarPorClasse(classe) {
    document.querySelectorAll("." + classe).forEach(e => e.style.display = "block");
}
function esconderPorClasse(classe) {
    document.querySelectorAll("." + classe).forEach(e => e.style.display = "none");
}