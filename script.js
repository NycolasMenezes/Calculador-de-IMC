function calcular() {
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var imc = peso / (altura * altura)
    var imcresetado = imc.toFixed(2)

    if (altura === '' && peso === '') {
        document.getElementById('classificacao').innerText = `Preencha os campos antes de enviar!`
    }

    else if (imcresetado >= 0) {
        document.getElementById('classificacao').innerText = `Valores invalidos!`
    }

    if (altura > 3) {
        document.getElementById('classificacao').innerText = `Digite a altura em metros. Ex: 1.75`
    }

    if (imcresetado < 18.5) {
        document.getElementById('resultado').innerText = `Seu IMC é de: ${imcresetado} `
        document.getElementById('classificacao').innerText = `Abaixo do Peso`
    }

    else if (imcresetado > 18.5 && imcresetado < 24.9) {
        document.getElementById('resultado').innerText = `Seu IMC é de: ${imcresetado} `
        document.getElementById('classificacao').innerText = `Peso normal`
    }

    else if (imcresetado > 25 && imcresetado < 29.9) {
        document.getElementById('resultado').innerText = `Seu IMC é de: ${imcresetado} `
        document.getElementById('classificacao').innerText = `Sobrepeso`
    }

    else if (imcresetado > 30) {
        document.getElementById('resultado').innerText = `Seu IMC é de: ${imcresetado} `
        document.getElementById('classificacao').innerText = `Obesidade`
    }
}