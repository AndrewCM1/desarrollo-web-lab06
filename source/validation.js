const validación = (e) => {
    e.preventDefault();
    const nombreDeUsuario = document.getElementById('usuario');
    const direcciónEmail = document.getElementById('email');
    if (usuario.value  === "") {
    alert ("Por favor, escribe tu nombre de usuario.")
    usuario.focus();
    return false;
    }
    if (email.value === "") {
    alert ("Por favor, escribe tu correo electrónico");
    email. focus();
    return false;
    }
    return true;
    }