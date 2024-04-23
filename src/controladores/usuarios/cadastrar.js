const knex = require('../database/conexao');
const bcrypt = require('bcrypt');
require('dotenv').config;


const cadastrarUsuario = async (req, res) => {
    const {nome, email, senha} = req.body;

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10);

        await knex('usuarios').insert({nome, email, senha: senhaCriptografada});

        return res.status(201).json({mensagem: 'Usuário cadastrado com sucesso.'});
        
    } catch (error) {
        return res.status(500).json({mensagem: error.message});
    }
}

module.exports = cadastrarUsuario;