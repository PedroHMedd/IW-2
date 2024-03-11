function calcular() {
    var peso = parseFloat(document.getElementById('peso').value)
    var altura = parseFloat(document.getElementById('altura').value)
    var calcular = peso / (altura * altura)
    resultado.innerHTML = calcular
    d(calcular)
}

function d(calcular) {
    var genero = document.getElementById('genero').value
    if (genero == 'masculino') {
        if (calcular < 20) {
            dvalor.innerHTML = 'Abaixo do peso normal'
        }
        else if (calcular >= 20 && calcular < 25) {
            dvalor.innerHTML = 'Normal'
        }
        else if (calcular >= 25 && calcular < 30) {
            dvalor.innerHTML = 'Obesidade leve'
        }
        else if (calcular >= 30 && calcular < 35) {
            dvalor.innerHTML = 'Obesidade grau I'
        }
        else if (calcular >= 40) {
            dvalor.innerHTML = 'Obesidade grau III'
        }
        else {
            dvalor.innerHTML = 'Obesidade grau II'
        }
    }
    else if (genero == 'feminino') {
        if (calcular < 19) {
            dvalor.innerHTML = 'Abaixo do peso normal'
        }
        else if (calcular >= 19 && calcular < 24) {
            dvalor.innerHTML = 'Normal'
        }
        else if (calcular >= 24 && calcular < 29) {
            dvalor.innerHTML = 'Obesidade leve'
        }
        else if (calcular >= 29 && calcular < 34) {
            dvalor.innerHTML = 'Obesidade grau I'
        }
        else if (calcular >= 39) {
            dvalor.innerHTML = 'Obesidade grau III'
        }
        else {
            dvalor.innerHTML = 'Obesidade grau II'
        }
    }
    else {
        dvalor.innerHTML = 'Erro de dados'
    }
}