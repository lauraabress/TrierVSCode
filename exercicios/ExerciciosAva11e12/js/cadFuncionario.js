document
    .getElementById("form-funcionario")
    .addEventListener("submit", function(event) {
        event.preventDefault(); //QUANDO DA F5 NA PÁGINA NÃO SOME

    const nome = document.getElementById("nome").value;
    const cargo = document.getElementById("cargo").value;
    const departamento = document.getElementById("departamento").value;
    const salario = document.getElementById("salario").value;

    const novoFuncionario = {nome, cargo, departamento, salario};

    let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || []; 
    funcionarios.push(novoFuncionario); 
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios)); 

    document.getElementById("form-funcionario").reset(); 
    listarFuncionarios(); 

})

function listarFuncionarios() {
    const container = document.getElementById("lista-funcionarios"); 
    container.innerHTML = ""; 

    const funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || []; 

    if (funcionarios.length === 0) {
        container.innerHTML = "<p>Nenhum funcionário cadastrado.</p>";   
        return; 
    }

    funcionarios.forEach((funcionario) => {
        const div = document.createElement("div"); 
        div.className = "funcionario"; 
        div.innerHTML = `<strong>Nome: ${funcionario.nome}</strong><br>Cargo: ${funcionario.cargo}<br>Departamento: ${funcionario.departamento}<br>Salario: ${funcionario.salario}`; 
        container.appendChild(div); 
    });

}

window.addEventListener("DOMContentLoaded", listarFuncionarios);

 

