
const admin = 'admin@123'
const pasw = '123456789'




function Validar() {

    var user = document.getElementById('email').value
    var password = document.getElementById('password').value

    if (ValidarEspacios(user, password)) {
        if (user == admin && pasw == password) {
            var w = window.location.href = './index.html'
        } else { alert('Usuario incorrecto') }
    }
}



function ValidarEspacios(u, p) {
    var v = true
    var mensaje = ""
    if (u.trim() == "") {
        mensaje = mensaje + `El campo de correo no puede estar vacío. \n`
        v = false
    } else {
        var emailSeparado = u.split('')

        if (
            emailSeparado[0] == '@' ||
            emailSeparado[emailSeparado.length - 1] == '@' ||
            emailSeparado[emailSeparado.length - 2] == '@' ||
            emailSeparado[emailSeparado.length - 3] == '@'
        ) {
            mensaje = mensaje + `El caracter "@" debe estar introducido correctamente. \n`
            v = false
        } else {
            var cantidad = 0
            for (i = 0; i < emailSeparado.length; i++) {
                if (emailSeparado[i] == '@') {
                    cantidad++
                }
            }
            if (cantidad == 0 || cantidad > 1) {
                mensaje = mensaje + ` El email debe introducirse con un formato correcto. \n`
                var v = false
            }
        }

    }
    if (p.trim() == "") {
        v = false
        mensaje = mensaje + `El campo de contraseña no puede estar vacío. \n`
    }
    if (p.length < 8) {
        v = false
        mensaje = mensaje + `El campo de contraseña debe tener 8 caracteres. \n`
    }



    if (!v) {
        alert(mensaje)
    }

    return v
}

