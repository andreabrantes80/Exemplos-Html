// Função que calcula o IMC

function calculateIMC() {

    const weight = parseFloat(document.getElementById('weight')?.value);
    const height = parseFloat(document.getElementById('height')?.value);


    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('imcResult').innerText = 'Preencha os campos corretamente';
        return;
    }

    //calcula o IMC
    const imc = weight / (height * height);

    const resultElement = document.getElementById('imcResult');

    if (imc < 18.5) {
        resultElement.innerText = `Seu IMC é: ${imc.toFixed(2)} (Abaixo do peso)`;
        resultElement.className = "imc-abaixo";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultElement.innerText = `Seu IMC é: ${imc.toFixed(2)} (Peso Normal)`;
        resultElement.className = "imc-normal";
        
    } else if (imc >= 25 && imc < 29.9) {
        resultElement.innerText = `Seu IMC é: ${imc.toFixed(2)} (Sobrepeso)`;
        resultElement.className = "imc-sobrepeso";
    } else {
        resultElement.innerText = `Seu IMC é: ${imc.toFixed(2)} (Obesidade)`;
        resultElement.className = "imc-obesidade";
        
    }
}


function cleanInputs() {
    height.value = "";
    weight.value = "";
    // imcNumber.classList = "";
    // imcInfo.classList = "";
}