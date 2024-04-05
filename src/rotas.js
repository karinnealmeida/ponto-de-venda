const {Router} = require ('express');
const { listarCategoria } = require('./controladores/categorias');

const rotas = Router();

rotas.get("/categoria", listarCategoria); //teste de servidor - remover ao finalgit r

module.exports = rotas;