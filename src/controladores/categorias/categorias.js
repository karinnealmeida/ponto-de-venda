const knex = require('../../database/conexao');

const listarCategoria = async (req, res) => {
    try {
        const categoria = await knex('categorias').returning();
        return res.status(200).json(categoria);

    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}

module.exports = listarCategoria