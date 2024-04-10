const knex = require('../database/conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

const login = async (req, res) => {
    const {email} = req.body;

    try {
        const usuario = await knex('usuarios').where({ email }).first().returning();

        const token = jwt.sign({id: usuario.id}, process.env.SENHA_JWT, { 'expiresIn': '1d' })

        const {senha: _, ...usuarioLogado} = usuario;

        return res.status(200).json({usuario: usuarioLogado, token})
    
    } catch (error) {
        return res.status(500).json({mensagem: error.message});
    }
}

module.exports = {cadastrarUsuario, login}