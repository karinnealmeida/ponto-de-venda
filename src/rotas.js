const {Router} = require ('express');

const esquemaUsuario = require('./esquemas/esquemaUsuario');
const esquemaLogin = require('./esquemas/esquemaLogin');

const listarCategoria = require('./controladores/categorias/categorias');

const validarCorpoReq = require('./intermediarios/validarCorpoRequisicao');

const validarEmailUnico = require('./intermediarios/usuarios/validarEmail');
const validarLogin = require('./intermediarios/usuarios/validarLogin');
const autenticarUsuarioLogado = require('./intermediarios/usuarios/autenticacao');


const cadastrarUsuario = require('./controladores/usuarios/cadastrar');
const login = require('./controladores/usuarios/login');


const rotas = Router();

rotas.get("/categoria",
    listarCategoria);

rotas.post("/usuario",
    validarCorpoReq(esquemaUsuario),
    validarEmailUnico,
        cadastrarUsuario);

rotas.post("/login",
    validarCorpoReq(esquemaLogin),
    validarLogin,
        login);

rotas.use(autenticarUsuarioLogado);

module.exports = rotas;