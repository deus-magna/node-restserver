require('./config/config');
require('colors');

const mongoose = require('mongoose');
const path = require('path');

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Habilitar carpeta public
app.use(express.static(path.resolve(__dirname, '../public')));

// Configuracion global de rutas.
app.use(require('./routes/index'));

// Tambien funciona esta codigo.  
// mongoose.connect('mongodb://localhost:27017/cafe', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }) 
//     .then(() => console.log('Base de datos ONLINE'.green))
//     .catch((err) => {
//         console.log('ERROR al conectar'.red);
//         throw err;
//     });

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useCreateIndex: true

}, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE'.green);
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto', process.env.PORT.yellow);
})