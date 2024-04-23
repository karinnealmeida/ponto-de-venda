const joi = require('joi');

const esquemaUsuario = joi.object({
    nome: joi.string().trim().required().required().messages({
        'any.required': 'O campo nome é obrigatório.',
        'string.empty': 'O campo nome é obrigatório.'
    }),
    
    email: joi.string().trim().email().required().messages({
        'any.required': 'O campo email é obrigatório.',
        'string.empty': 'O campo email é obrigatório.',
        'string.email': 'O campo email precisa ter um formato válido'
        
    }),
    senha: joi.string().trim().min(6).required().messages({
        'any.required': 'O campo senha é obrigatório.',
        'string.empty': 'O campo senha é obrigatório.',
        'string.min': 'A senha deve ter, no mínimo, 6 carateres.'
    })
});

module.exports = esquemaUsuario;