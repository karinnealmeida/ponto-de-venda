const knex = require('../../database/conexao');
const jwt = require('jsonwebtoken');
require('dotenv').config;

const login = async (req, res) => {
    const {email} = req.body;

    try {
        const usuario = await knex('usuarios').where({ email }).first().returning();

        const token = jwt.sign({id: usuario.id}, process.env.SENHA_JWT, { 'expiresIn': '1d' })

        const {senha: _, ...usuarioLogado} = usuario;

        return res.status(200).json({
            usuario: usuarioLogado, token
        })
    
    } catch (error) {
        return res.status(500).json({
            mensagem: error.message
        });
    }
}

module.exports = login