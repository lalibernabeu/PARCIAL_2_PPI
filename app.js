
function mostrarMas(idElemento) {
    var elemento = document.getElementById(idElemento);
    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}

document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const oficio = document.getElementById('oficio').value;
    const descripcion = document.getElementById('descripcion').value;

    
    document.getElementById('resultado').innerText = window.alert('¡Gracias por su sugerencia! ');

    
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
}
document.querySelectorAll('.ver-mas').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); 
        const detalles = this.nextElementSibling;
        detalles.style.display = detalles.style.display === 'none' ? 'block' : 'none';
    });
});

// Función para establecer la fecha máxima para el campo de nacimiento
window.onload = () => {
    const dobInput = document.getElementById('dob');
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate())
        .toISOString()
        .split('T')[0]; // Convertimos la fecha a formato "YYYY-MM-DD"
    dobInput.setAttribute('max', maxDate);
};

document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario si hay errores

    const email = document.getElementById('email');
    const dob = document.getElementById('dob');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    let isValid = true;

    // Validar email
    if (!email.checkValidity()) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Validar fecha de nacimiento
    if (!dob.checkValidity()) {
        dob.classList.add('is-invalid');
        isValid = false;
    } else {
        dob.classList.remove('is-invalid');
    }

    // Validar contraseña (mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password.value)) {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    // Validar confirmación de contraseña
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    // Si todo es válido, se envía el formulario
    if (isValid) {
        alert('¡Registro exitoso!');
        this.reset(); // Resetea el formulario
    }
});

