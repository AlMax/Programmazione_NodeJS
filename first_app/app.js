// importiamo express
const express = require('express');

// libreria per definire i parser
const bodyParser = require('body-parser');

// dichiariamo le routes, definite in routes/feed.js
const feedRoutes = require('./routes/feed');

const app = express();

// il nostro parser per le richieste è di tipo json
app.use(bodyParser.json());

// il sottodominio sarà localhost:8080/feed/prova, per la prima api in get
app.use('/feed', feedRoutes);

app.listen(8080);