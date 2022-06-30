// importiamo express
const express = require('express');

// libreria per definire i parser
const bodyParser = require('body-parser');

// dichiariamo le routes, definite in routes/feed.js
const feedRoutes = require('./routes/feed');

const app = express();

// il nostro parser per le richieste è di tipo json
app.use(bodyParser.json());

// gestione errore di CORS
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});

// cartella aperta pubblicamente
app.use(express.static('public'));

// il sottodominio sarà localhost:port/feed/prova, per la prima api in get
app.use('/feed', feedRoutes);

app.listen(3000);