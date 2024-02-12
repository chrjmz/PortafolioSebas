let device = document.querySelector("html").offsetWidth >= 1025 ? 'des' : 'mob';

function verificarInputs() {
    // Get input values
    var nombre = document.getElementById("nombre")
    var email = document.getElementById("email")
    var tel = document.getElementById("telefono")
    var mensaje = document.getElementById("mensaje")
    var error_nombre = document.querySelector(".error-nombre");
    var error_email = document.querySelector(".error-email");
    var error_tel = document.querySelector(".error-tel");

    truename = false
    trueemail = false
    truetel = false

    // Check Nombre input
    if (nombre.value === "") {
        nombre.classList.add("error")
        error_nombre.textContent = "Ingrese un Nombre"
    } else {
        nombre.classList.add("accept")
        error_nombre.textContent = ""
        truename = true
    }

    // Check Email input
    if (email.value === "") {
        email.classList.add("error")
        email.focus()
        error_email.textContent = "Ingrese un correo Electronico"
    } else if (!validateEmail(email.value)) {
        email.classList.add("error")
        email.focus()
        eliminar_accept(email)
        error_email.textContent = "Ingrese un correo Electronico correcto"
    } else {
        email.classList.add("accept")
        error_email.textContent = ""
        trueemail = true
    }

    // Check Tel input
    if (tel.value === "") {
        tel.classList.add("error")
        tel.focus()
        error_tel.textContent = "Ingrese un teléfono"
    } else if (!validateTel(tel.value)) {
        tel.classList.add("error")
        tel.focus()
        error_tel.textContent = "Ingrese un teléfono correcto"
        eliminar_accept(tel)
    } else {
        tel.classList.add("accept")
        error_tel.textContent = ""
        truetel = true
    }

    if (truename == false) {
        nombre.focus()
        return false
    } else if (trueemail == false) {
        email.focus()
        return false
    } else if (truetel == false) {
        tel.focus()
        return false
    } else {
        enviarCorreo()
        return true;
    }
}

// Helper function to validate email
function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to validate phone number
function validateTel(tel) {
    var telRegex = /^\d{10}$/; // Assuming 10-digit phone number
    return telRegex.test(tel);
}

function irAAncla(event) {
    setTimeout(() => {
        var ancla = document.querySelector("section#sillas"); // Obtener el elemento ancla
        ancla.scrollIntoView({ behavior: 'smooth' }); // Ir a la posición del ancla con animación suave
    }, 200);
}

// Configuración de SMTP.js

// Función para enviar el correo electrónico
function enviarCorreo() {
    console.log()
    const verificar_valor = (valor) => {
        if (valor == null) {
            return "no seleccionado"
        } else {
            return valor.textContent
        }
    }

    let nombre = document.getElementById("nombre").value
    let destinatario = document.getElementById("email").value
    let telefono = document.getElementById("tel").value
    let mensaje = document.getElementById("mensaje").value

    var data = {
        email_comprador: destinatario,
        name: nombre,
        tel: telefono,
        mensaje: menj,
    };

    fetch("./enviar-mail.php", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Imprimir la respuesta del servidor en la consola
    })
    .catch(error => {
        console.error('Hubo un error al llamar a enviar_correo.php:', error);
    });

    setTimeout(() => {
        fetch("./enviar-mail-cliente.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(data => {
            console.log(data); // Imprimir la respuesta del servidor en la consola
        })
        .catch(error => {
            console.error('Hubo un error al llamar a enviar_correo_cliente.php:', error);
        });
    }, 300);
}




