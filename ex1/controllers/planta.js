const Planta = require('../models/planta')
const mongoose = require('mongoose')

module.exports.list = () => {
    return Planta.find()
        .then((result) => {
            return result
        }).catch((err) => {
            throw err
        });
}

module.exports.getPlanta = (id) => {
    return Planta.findOne({ _id: id })
        .then((result) => {
            return result
        }).catch((err) => {
            throw err
        });
}

module.exports.addPlanta = (planta) => {
    return Planta.collection.insertOne(planta)
        .then((result) => {
            return result
        }).catch((err) => {
            throw err
        });
}

module.exports.updatePlanta = (planta) => {
    return Planta.updateOne({ _id: planta._id }, planta)
        .then(result => {
            return result
        })
        .catch(erro => {
            throw erro
        })
}

module.exports.deletePlanta = (id) => {
    return Planta.deleteOne({ _id: id })
        .then((result) => {
            return result
        }).catch((err) => {
            throw err
        });
}

module.exports.getPlantasFromEspecie = (especie) => {
    return Planta.find({ "Espécie": especie })
        .then((result) => {
            return result
        }).catch((err) => {
            throw err
        });
}

module.exports.getPlantasFromImplantacao = (implatacao) => {
    return Planta.find({ "Implantação": implatacao })
        .then((result) => {
            return result
        }).catch((err) => {
            throw err
        });
}

module.exports.getFreguesias = () => {
    return Planta.aggregate([{
        $group: {
            _id: "$Freguesia",
            count: {
                $sum: 1
            }
        }
    }, {
        $sort: {
            "_id": 1
        }
    }, {
        $project: {
            count: 0
        }
    }])
        .then((result) => {
            let aux = []
            result.forEach(freg => aux.push(freg._id))
            return aux
        }).catch((err) => {
            throw err
        });
}

module.exports.getEspecies = () => {
    return Planta.aggregate([{
        $group: {
            _id: "$Espécie",
            count: {
                $sum: 1
            }
        }
    }, {
        $sort: {
            "_id": 1
        }
    }, {
        $project: {
            count: 0
        }
    }])
        .then((result) => {
            let aux = []
            result.forEach(esp => aux.push(esp._id))
            return aux
        }).catch((err) => {
            throw err
        });
}

module.exports.getNomeCientifico = (especie) => {
    return Planta.aggregate([{
                $match: {
                    "Espécie": especie
                }
            },{
                $group: {
                _id: {Especie: "$Espécie", Nome_cientifico: "$Nome_cientifico"},
                quantos: {
                    $sum: 1
                }
                }
            }])
            .then((result) => {
                return {Nome_cientifico: result[0]._id.Nome_cientifico}
            }).catch((err) => {
                
            });
}

