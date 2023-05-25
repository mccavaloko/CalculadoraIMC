function calcularIMC(){
    const campoResultado = document.querySelector('#resultado');
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    let resultado = peso.value / altura.value ** 2
    if (resultado < 18.5){
        campoResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)} (Abaixo do peso)</p>`
        campoResultado.classList.remove("bom")
        campoResultado.classList.add("bad")
    }else if (resultado >= 18.5 && resultado <= 24.9){
        campoResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)} (Peso normal)</p>`
        campoResultado.classList.remove("bad")
        campoResultado.classList.add("bom")
    }else if (resultado >= 25 && resultado <= 29.9){
        campoResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)} (Sobrepeso)</p>`
        campoResultado.classList.remove("bom")
        campoResultado.classList.add("bad")
    }else if (resultado >= 30 && resultado <= 34.9){
        campoResultado.innerHTML = `<p>Seu IMC é ${resultado.toFixed(2)} (Obesidade grau 1)</p>`
        campoResultado.classList.remove("bom")
        campoResultado.classList.add("bad")
    }else if (resultado >= 35 && resultado <= 39.9){
        campoResultado.innerHTML = `<p>Seu IMC é ${(peso.value / altura.value **2).toFixed(2)} (Obesidade grau 2)</p>`
        campoResultado.classList.remove("bom")
        campoResultado.classList.add("bad")
    }else{
        campoResultado.innerHTML = `<p>Seu IMC é ${(peso.value / altura.value **2).toFixed(2)} (Obesidade grau 3)</p>`
        campoResultado.classList.remove("bom")
        campoResultado.classList.add("bad")
    }
}
