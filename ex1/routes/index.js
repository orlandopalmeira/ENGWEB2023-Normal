var express = require('express');
var router = express.Router();
const Planta = require('../controllers/planta');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/plantas', function (req, res, next) {
    if (req.query && Object.keys(req.query).length > 0) {
        if (req.query.especie) {
            Planta.getPlantasFromEspecie(req.query.especie)
            .then((result) => {
                res.jsonp(result);
            }).catch((err) => {
                res.jsonp(err)
            });
        }
        else if (req.query.implant) {
            Planta.getPlantasFromImplantacao(req.query.implant)
            .then((result) => {
                res.jsonp(result);
            }).catch((err) => {
                res.jsonp(err)
            });
        }
    }else{
        Planta.list()
        .then((result) => {
            res.jsonp(result);
        }).catch((err) => {
            res.jsonp(err)
        });
    }
})

router.get('/plantas/freguesias', function (req, res, next) {
    Planta.getFreguesias()
    .then((result) => {
        res.jsonp(result);
    }).catch((err) => {
        res.jsonp(err)
    });
})

router.get('/plantas/especies', function (req, res, next) {
    Planta.getEspecies()
    .then((result) => {
        res.jsonp(result);
    }).catch((err) => {
        res.jsonp(err)
    });
})

router.get('/plantas/:id', function (req, res, next) {
    Planta.getPlanta(req.params.id)
    .then((result) => {
        res.jsonp(result);
    }).catch((err) => {
        res.jsonp(err)
    });
})

router.post('/plantas', function (req, res, next) {
    Planta.addPlanta(req.body)
    .then((result) => {
        res.jsonp(result);
    }).catch((err) => {
        res.jsonp(err)
    });
})

router.delete('/plantas/:id', function (req, res, next) {
    Planta.deletePlanta(req.params.id)
    .then((result) => {
        res.jsonp(result);
    }).catch((err) => {
        res.jsonp(err)
    });
})

router.get('/especie/:id/nomeCientifico', function (req, res, next) {
    Planta.getNomeCientifico(req.params.id)
    .then((result) => {
        res.jsonp(result);
    }).catch((err) => {
        res.jsonp(err)
    });
})

module.exports = router;
