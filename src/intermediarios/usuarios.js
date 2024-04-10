const knex = require("../database/conexao");
const bcrypt = require('bcrypt');

const validarEmailUnico = async (req, res, next) => {
    try {
        const { email } = req.body;

            if (await knex('usuarios').where({ email }).first()) {

                return res.status(400).json({ mensagem: "Email já cadastrado."});
            }

            next();

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
}

const validarLogin = async (req, res, next) => {
    const {email, senha} = req.body;

    try {

        const usuario = await knex('usuarios').where({email}).first().returning();

        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!usuario || !senhaValida) {
            return res.status(404).json({mensagem: 'E-mail ou senha incorretos.'});
        }

        next();
        
    } catch (error) {
        return res.status(500).json({mensagem: error.message})
    }
}

module.exports = {validarEmailUnico, validarLogin}