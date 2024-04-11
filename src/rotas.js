const {Router} = require ('express');
const { listarCategoria } = require('./controladores/categorias');
const { cadastrarUsuario, login } = require('./controladores/usuarios');
const { validarEmailUnico, validarLogin } = require('./intermediarios/usuarios');
const validarCorpoReq = require('./intermediarios/validarCorpoRequisicao');
const esquemaUsuario = require('./esquema/esquemaUsuario');
const esquemaLogin = require('./esquema/esquemaLogin');

const rotas = Router();

rotas.get("/categoria", listarCategoria);
rotas.post("/usuario", validarCorpoReq(esquemaUsuario), validarEmailUnico, cadastrarUsuario);
rotas.post("/login",validarCorpoReq(esquemaLogin), validarLogin, login);

module.exports = rotas;