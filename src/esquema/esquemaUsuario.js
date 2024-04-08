const joi = require('joi');

const esquemaUsuario = joi.object({
    nome: joi.string().required().trim().required().messages({
        'any.required': 'O campo nome é obrigatório.',
        'string.empty': 'O campo nome é obrigatório.'
    }),
    
    email: joi.string().email().trim().required().messages({
        'any.required': 'O campo email é obrigatório.',
        'string.empty': 'O campo email é obrigatório.',
        'string.email': 'O campo email precisa ter um formato válido'
        
    }),
    senha: joi.string().min(6).trim().required().messages({
        'any.required': 'O senha nome é obrigatório.',
        'string.empty': 'O senha nome é obrigatório.',
        'string.min': 'A senha deve ter no mínimo 6 caraters.'
    })
});

module.exports = esquemaUsuario;