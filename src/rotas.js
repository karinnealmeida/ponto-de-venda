const {Router} = require ('express');
const { listarCategoria } = require('./controladores/categorias');

const rotas = Router();

rotas.get("/categoria", listarCategoria);

module.exports = rotas;