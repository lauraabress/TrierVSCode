// JavaScript para gerenciar o cadastro de animais em um zoológico
document
    .getElementById("form-animal")
    .addEventListener("submit", function(event) {
        event.preventDefault(); 

    // Obtém os valores dos campos
    const nome = document.getElementById("nome-animal").value;
    const especie = document.getElementById("especie-animal").value;
    const idade = document.getElementById("idade-animal").value;
    const habitat = document.getElementById("habitat-animal").value;

    // Cria um objeto animal com os valores dos campos
    const novoAnimal = {nome, especie, idade, habitat};

    // Recupera os animais do localStorage ou inicializa um array vazio
    let animais = JSON.parse(localStorage.getItem("animais")) || []; 
    animais.push(novoAnimal); 
    localStorage.setItem("animais", JSON.stringify(animais)); 

    // Limpa o formulário e atualiza a lista de animais
    document.getElementById("form-animal").reset(); 
    listarAnimais(); 

})

// Função para listar os animais cadastrados
function listarAnimais() {

    // Obtém o container onde a lista de animais será exibida
    const container = document.getElementById("lista-animais"); 
    container.innerHTML = ""; 

    // Recupera os animais do localStorage ou inicializa um array vazio
    const animais = JSON.parse(localStorage.getItem("animais")) || []; 

    // Verifica se há animais cadastrados
    if (animais.length === 0) {
        container.innerHTML = "<p>Nenhum animal cadastrado.</p>";   
        return; 
    }

    // Cria um elemento div para cada animal e adiciona ao container
    animais.forEach((animal) => {
        const div = document.createElement("div"); 
        div.className = "animal"; 
        div.innerHTML = `<strong>Nome: ${animal.nome}</strong><br>Espécie: ${animal.especie}<br>Idade: ${animal.idade}<br>Habitat: ${animal.habitat}`; 
        container.appendChild(div); 
    });

}

// Chama a função listarAnimais quando o DOM estiver completamente carregado
window.addEventListener("DOMContentLoaded", listarAnimais);

 

