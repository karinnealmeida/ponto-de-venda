const knex = require("../database/conexao")

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

module.exports = {validarEmailUnico}