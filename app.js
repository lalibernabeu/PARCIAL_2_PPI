
function mostrarMas(idElemento) {
    var elemento = document.getElementById(idElemento);
    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}

document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Obtener los valores del formulario
    const oficio = document.getElementById('oficio').value;
    const descripcion = document.getElementById('descripcion').value;

    // Mostrar mensaje de agradecimiento
    document.getElementById('resultado').innerText = window.alert('¡Gracias por su sugerencia! ');

    // Limpiar el formulario
    document.getElementById('miFormulario').reset();
});

let currentInput = '';
let previousInput = '';
let operation = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }

    currentInput = computation;
    operation = '';
    previousInput = '';
    updateDisplay();
}

function clearResult() {
    currentInput = '';
    previousInput = '';
    operation = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('resultado').value = currentInput;
}
