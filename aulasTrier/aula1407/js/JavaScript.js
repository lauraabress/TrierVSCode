function somar(){
    const primeiroNumero = Number (
        document.getElementById("primeiroNumero").value
    );
    const segundoNumero = Number (
        document.getElementById("segundoNumero").value
    );

    window.alert("A soma dos números inseridos é: " + (primeiroNumero + segundoNumero));
}

function multiplicar(){
    const primeiroNumeroMult = Number (
        document.getElementById("primeiroNumeroMult").value
    );
    const segundoNumeroMult = Number (
        document.getElementById("segundoNumeroMult").value
    );

    const resultado = primeiroNumeroMult * segundoNumeroMult;

    window.alert("O resultado da multiplicação é: " + resultado);
}

function dividir(){
    const primeiroNumeroDiv = Number (
        document.getElementById("primeiroNumeroDiv").value
    );
    const segundoNumeroDiv = Number (
        document.getElementById("segundoNumeroDiv").value
    );

    const resultado = primeiroNumeroDiv / segundoNumeroDiv;

    window.alert("O resultado da divisão é: " + resultado);
}

function subtrair(){
    const primeiroNumeroSub = Number (
        document.getElementById("primeiroNumeroSub").value
    );
    const segundoNumeroSub = Number (
        document.getElementById("segundoNumeroSub").value
    );

    const resultado = primeiroNumeroSub - segundoNumeroSub;

    window.alert("O resultado da subtração é: " + resultado);
}