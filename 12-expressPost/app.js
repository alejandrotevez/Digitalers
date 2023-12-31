const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config()
const app = express()
const PORT = process.env.PORT || 8080;

const controlJWT = () => {
    console.log('=============');
    console.log('Ejecutando el Middleware y controlando el JWT');
    console.log('=============');

    netx();
}

//Middlewares: funciones que se ejecutan antes de que lleguen a las rutas
//de Express
app.use(express.json());//mi app entiende json
app.use(express.urlencoded({extended: true}));//mi app entiente formularios
app.use(express.static(path.join(__dirname, 'public')));//mi app entiende archivos estaticos(css, js, ing)

//Propios
app.use((req, res, next) =>{

    let fecha = new Date();
    let mes = fecha.getMonth();
    let fechaActual = fecha.getDate() + '/' + (mes + 1) + '/' + fecha.getFullYear();
    console.log('=============');
    console.log('Pasó por el Middleware siendo el');
    console.log(fechaActual);

    // el mes arranca desde 0: zero va a ser = que enero
    //res.send('<h1>Procesando Pedido....</h1>');
    console.log('=============');
    console.log(__dirname + '/public');
    console.log(path.join(__dirname, 'public'));
    console.log('=============');
    console.log(__filename);
    console.log('=============');

    if(req.method === 'GET'|| req.method === 'POST'){

        //req.headers('conten-type')
        next();
    }else{
        res.send('<h1>Procesando Pedido....</h1>')
    }
})

app.get('/', (req, res)=>{
    res.send('<h1>Bienvenidos a la App</h1>');
});

app.get('/home', (req, res)=>{
    res.sendFile('index.html');
});

app.get('/formulario', controlJWT, (req, res)=>{
    res.send('<h1>Te enviamos el Formulario</h1>');
});

//POST
app.post('/formulario', (req,res) => {

    console.log(req.body);

    res.send('<h1>Recibimos tus Datos</h1>')
});

app.listen(PORT, (err) =>{
    if(err) {throw err}
    console.log(`Sevidor escuchando en el puerto http://localhost:${PORT}`);
})