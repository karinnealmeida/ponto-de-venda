const {Router} = require ('express');
const { listarCategoria } = require('./controladores/categorias');
const { cadastrarUsuario } = require('./controladores/usuarios');
const { validarEmailUnico } = require('./intermediarios/usuarios');
const validarCorpoReq = require('./intermediarios/validarCorpoRequisicao');
const esquemaUsuario = require('./esquema/esquemaUsuario');

const rotas = Router();

rotas.get("/categoria", listarCategoria);
rotas.post("/usuario", validarCorpoReq(esquemaUsuario), validarEmailUnico, cadastrarUsuario)

module.exports = rotas;