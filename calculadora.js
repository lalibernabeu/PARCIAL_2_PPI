let resultado = '';
let operador = '';

function agregarNumero(num) {
    resultado += num;
    document.getElementById('resultado').value = resultado;
}

function operar(op) {
    operador = op;
    resultado += ' ' + op + ' ';
    document.getElementById('resultado').value = resultado;
}

function calcular() {
    const partes = resultado.split(' ');
    let total = parseFloat(partes[0]);
    for (let i = 1; i < partes.length; i += 2) {
        const siguienteNumero = parseFloat(partes[i + 1]);
        switch (partes[i]) {
            case '+':
                total += siguienteNumero;
                break;
            case '-':
                total -= siguienteNumero;
                break;
            case '*':
                total *= siguienteNumero;
                break;
            case '/':
                total /= siguienteNumero;
                break;
        }
    }
    document.getElementById('resultado').value = total;
    resultado = total.toString();
}

function clearResult() {
    resultado = '';
    document.getElementById('resultado').value = '';
}
