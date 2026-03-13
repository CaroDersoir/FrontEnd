//on importe le framwork express
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

// express() est une fonction qui crée une instance de l’application Express
//Cette instance app sera notre application express
const app = express();
// activer CORS pour permettre les requêtes depuis le frontend (React) vers le backend (Node.js) sans problèmes de politique de même origine.
app.use(cors());
// Middleware pour parser le JSON des POST
//app.use(express.json());

// Connexion à MySQL
const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'essai',
    port: 3306
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à mysql :', err);
        return;
    }
    console.log('Connexion réussie à mysql');
}
);

// app.use((req, res, next) => {
//     console.log(`Requête reçue : ${req.method} ${req.url}`);
//     next();
// });


app.get('/', (req, res, next) => {
    connection.query('SELECT * FROM items', (err, results) => {
        if (err) {
            console.error('Erreur lors de la requête SELECT :', err);
            res.status(500).json({ error: 'Erreur lors de la requête SELECT' });
            return;
        }
        res.status(200).json(results);
    });
});


// app.use((req, res, next) => {
//     res.json({ message: 'Requête reçue en JSON !' });
// });

//on va exporter app pour qu'on puisse y accéder depuis les autres fichiers du projet, notamment notre serveur Node
module.exports = app;