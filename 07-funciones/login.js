function login() {

let user = document.getElementById('user').value;
let password = document.getElementById('password').value;

console.log(user);
console.log(password);

//1. Validar que los campos no esten vacios
if (user == "" && password == "") {
    alert('Datos no ingresados')
}

//2. Validar si el usuario o la contraseña estan vacios
else if (user == "" || password == "") {
    alert('un dato no fue ingresado')
}
//3. Validar que el usuario y la contraseña sean correctas
else if (user == 'admin' && password == '1234') {
    alert('Bienvenido administrador');
    window.location.href = './index.html';

//4 Redirigir a la pagina de admin o error
} else {
    alert('Usuario o contraseña incorrectos')
    window.location.href = './error.html';
}



}