// import di express e dichiarazione di routes
const express = require('express');
const router = express.Router();

// richiamiamo il controller definito nella cartella
const feedController = require('../controllers/feed');

// creata una route in get. Fa riferimento al suo controllore definito nell'apposita cartella
router.get('/prova', feedController.getProva);

router.post('/prova', feedController.createProva);

// esportiamo tutto
module.exports = router;