
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
