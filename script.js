document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');
    const loginMessage = document.getElementById('loginMessage');
    const registerMessage = document.getElementById('registerMessage');

    showRegisterLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    });

    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
    });


    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = loginForm.querySelector('#loginEmail').value;
        const password = loginForm.querySelector('#loginPassword').value;

        if (email === 'usuario@ejemplo.com' && password === 'contraseña') {
            loginMessage.textContent = 'Inicio de sesión exitoso.';
            loginMessage.className = 'form-message success';
            loginForm.reset();
        } else {
            loginMessage.textContent = 'Inicio de sesión incorrecto.';
            loginMessage.className = 'form-message error';
        }
    });

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = registerForm.querySelector('#registerName').value;
        const email = registerForm.querySelector('#registerEmail').value;
        const password = registerForm.querySelector('#registerPassword').value;
        const confirmPassword = registerForm.querySelector('#confirmPassword').value;

        if (password !== confirmPassword) {
            registerForm.querySelector('#confirmPasswordError').textContent = 'Las contraseñas no coinciden.';
            return;
        } else {
            registerForm.querySelector('#confirmPasswordError').textContent = '';
        }

        
        console.log('Registro:', { name, email, password });
        registerMessage.textContent = 'Registro exitoso.';
        registerMessage.className = 'form-message success';
        registerForm.reset();
        setTimeout(() => {
            registerForm.classList.remove('active');
            loginForm.classList.add('active');
        }, 2000);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('citaForm');
    const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('hora').value;

        const mensaje = `¡Gracias, ${nombre}! Tu cita para el ${fecha} a las ${hora} ha sido solicitada. Te contactaremos pronto para confirmarla.`;

        mensajeConfirmacion.textContent = mensaje;
        mensajeConfirmacion.classList.remove('hidden');
        form.reset(); 
    });
});