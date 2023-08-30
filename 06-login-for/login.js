

let user = 'pepe'
let pass = 123456;

let userLogin = prompt('Ingrese su usuario')
let userPass = prompt('Ingrese su password')

if (userLogin == user && userPass == pass) {
    alert('Bienvenido')
    location.href = 'push.html'
}else{
    alert('Usuario o contraseña incorrecto')
    location.href = 'error.html'
}