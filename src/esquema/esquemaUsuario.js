const joi = require('joi');

const esquemaUsuario = joi.object({
    nome: joi.string().required().trim().required(),
    email: joi.string().email().trim().required(),
    senha: joi.string().min(6).trim().required()
});

module.exports = esquemaUsuario;