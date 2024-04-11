const joi = require('joi');

const esquemaLogin = joi.object({
    email: joi.string().email().trim().required().messages({
        'any.required': 'O campo email é obrigatório.',
        'string.empty': 'O campo email é obrigatório.',
        'string.email': 'O campo email precisa ter um formato válido'
        
    }),
    senha: joi.string().min(6).trim().required().messages({
        'any.required': 'O campo senha é obrigatório.',
        'string.empty': 'O campo senha é obrigatório.',
    })
});

module.exports = esquemaLogin;