const joi = require('joi');

const esquemaLogin = joi.object({
    email: joi.string().trim().email().required().messages({
        'any.required': 'O campo email é obrigatório.',
        'string.empty': 'O campo email é obrigatório.',
        'string.email': 'O campo email precisa ter um formato válido'
        
    }),
    senha: joi.string().trim().min(6).required().messages({
        'any.required': 'O campo senha é obrigatório.',
        'string.empty': 'O campo senha é obrigatório.',
        'string.min': 'E-mail ou senha incorretos.'
    })
});

module.exports = esquemaLogin;