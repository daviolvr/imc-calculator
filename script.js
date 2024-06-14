const inputPeso = document.querySelector('.inputPeso');
const inputAltura = document.querySelector('#inputAltura');
const button = document.querySelector('button');

function calculaIMC(peso, altura) {
    const resultado = peso / (altura ** 2);
    return resultado.toFixed(2);
}

function criaP(textoAdicional) {
    const textoResultado = document.querySelector('#resultado');
    textoResultado.textContent = `Seu IMC é: ${textoAdicional}`;
}

button.addEventListener("click", function(e) {
    e.preventDefault();
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (peso && altura) {
        const result = calculaIMC(peso, altura);
        criaP(result);
    } else {
        const textoResultado = document.querySelector('#resultado');
        textoResultado.textContent = 'Dados inválidos.';
    }
});
