const {Router} = require ('express');
const { listarCategoria } = require('./controladores/categorias');
const { cadastrarUsuario } = require('./controladores/usuarios');

const rotas = Router();

rotas.get("/categoria", listarCategoria);
rotas.post("/usuario", cadastrarUsuario)

module.exports = rotas;