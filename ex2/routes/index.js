var express = require('express');
var router = express.Router();
const axios = require('axios')
const conf = require('../config/env')

/* GET home page. */
router.get('/', function (req, res, next) {
    axios.get(conf.apiRoute('/plantas'))
    .then((result) => {
        res.render('index', { title: 'Registos', n_registos: result.data.length,plantas: result.data});
    }).catch((err) => {
        res.render('error', {error: err})
    });
});

router.get('/:id', function (req, res, next) {
    axios.get(conf.apiRoute('/plantas/' + req.params.id))
    .then((result) => {
        res.render('planta', { title: `Registo ${req.params.id}`, planta: result.data});
    }).catch((err) => {
        res.render('error', {error: err})
    });
});
// especie/:id/nomeCientifico
router.get('/especies/:id', function (req, res, next) {
    axios.get(conf.apiRoute(`/especie/${req.params.id}/nomeCientifico`))
    .then((nCientifico) => {
        axios.get(conf.apiRoute(`/plantas?especie=${req.params.id}`))
        .then((result) => {
            res.render('especie', {title: `Espécie: ${req.params.id}`, n_registos: result.data.length,especie: req.params.id, nomeCientifico: nCientifico.data.Nome_cientifico, plantas: result.data})
        }).catch((err) => {
            res.render('error', {error: err})
        });

    }).catch((err) => {
        res.render('error', {error: err})
    });
});

module.exports = router;
