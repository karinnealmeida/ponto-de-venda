const {Router} = require ('express');
const { listarCategoria } = require('./controladores/categorias');
const { cadastrarUsuario } = require('./controladores/usuarios');
const { validarEmailUnico } = require('./intermediarios/usuarios');

const rotas = Router();

rotas.get("/categoria", listarCategoria);
rotas.post("/usuario", validarEmailUnico, cadastrarUsuario)

module.exports = rotas;