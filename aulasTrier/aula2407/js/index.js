document
    .getElementById("form-cliente")
    .addEventListener("submit", function(event) {
        event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const novoCliente = {nome, email}; // Cria um objeto cliente com os valores dos campos

    let clientes = JSON.parse(localStorage.getItem("clientes")) || []; // Recupera os clientes do localStorage ou inicializa um array vazio
    clientes.push(novoCliente); // Adiciona o novo cliente ao array
    localStorage.setItem("clientes", JSON.stringify(clientes)); // Salva o array atualizado no localStorage

    document.getElementById("form-cliente").reset(); // Limpa o formulário - inseriu reseta
    listarClientes(); // Atualiza a lista de clientes

})

function listarClientes() {
    const container = document.getElementById("lista-clientes"); // Obtém o container onde a lista de clientes será exibida
    container.innerHTML = ""; // Limpa o conteúdo do container

    const clientes = JSON.parse(localStorage.getItem("clientes")) || []; // Recupera os clientes do localStorage ou inicializa um array vazio

    if (clientes.length === 0) {
        container.innerHTML = "<p>Nenhum cliente cadastrado.</p>"; // Exibe mensagem se não houver clientes
        return; // Sai da função se não houver clientes
    }

    clientes.forEach((cliente) => {
        const div = document.createElement("div"); // Cria um novo elemento div para cada cliente
        div.className = "cliente"; // Define a classe do div
        div.innerHTML = `<strong>${cliente.nome}</strong><br>Email: ${cliente.email}`; // Define o conteúdo do div com os dados do cliente
        container.appendChild(div); // Adiciona o div ao container
    });

}

window.addEventListener("DOMContentLoaded", listarClientes); // Chama a função listarClientes quando o DOM estiver completamente carregado

 

