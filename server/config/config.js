// =================
// PUERTO
// =================
process.env.PORT = process.env.PORT || 3000

// =================
// ENVIRONMENT
// =================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =================
// BASE DE DATOS
// =================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://deus_magna:zXwYuGd8qIAhExpz@cluster0-ny9yu.mongodb.net/cafe';
}

process.env.URLDB = urlDB;