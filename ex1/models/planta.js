const mongoose = require('mongoose')

var plantaSchema = new mongoose.Schema({
    "_id": Number,
    "Num_registo": Number,
    "Codigo_rua": Number,
    "Rua": String,
    "Local": String,
    "Freguesia":String,
    "Espécie": String,
    "Nome_cientifico": String,
    "Origem": String,
    "Data de Plantação": String,
    "Estado": String,
    "Caldeira": String,
    "Tutor": String,
    "Implantação": String,
    "Gestor": String,
    "Data_actualizacao": String,
    "Num_intervencoes": Number
}, { collection: 'plantas' });

module.exports = mongoose.model('planta', plantaSchema)