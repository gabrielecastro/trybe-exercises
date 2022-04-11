const { Book } = require('../models/index');

const getAll = async (req, res) => {
  try {
    const books = await Book.findAll({ order: [ [ 'title', 'ASC' ], [ 'createdAt', 'ASC' ] ] });
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(500).json({ message: 'Usuário não encontrado' })
    }

    return res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await Book.create({
      title,
      author,
      pageQuantity
    })
    return res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado' });
  }
}

const update = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
    const book = await Book.update({
      title, author, pageQuantity
    }, {
      where: {id}
    })
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    await Book.destroy(
      { where: {id} }
    )
    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

const getByAuthor = async (req, res) => {
  try {
    const { name } = req.params;
    const book = await Book.findAll({ where: { author: name } });
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = { getAll, getById, create, update, destroy, getByAuthor };