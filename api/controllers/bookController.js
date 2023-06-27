const Libro = require('../models/book');

const createLibro = async (req, res) => {
  try {
    const { isbn, titulo, autor, year, libraryId } = req.body;
    const libro = await Libro.create({ isbn, titulo, autor, year, libraryId });
    res.json(libro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el libro' });
  }
};


const getLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const libro = await Libro.findOne({ where: { id, eliminado: false } });
    if (libro) {
      res.json(libro);
    } else {
      res.status(404).json({ error: 'Libro no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el libro' });
  }
};

const getAllLibros = async (req, res) => {
  try {
    const libros = await Libro.findAll({ where: { eliminado: false } });
    res.json(libros);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los libros' });
  }
};

const updateLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const { isbn, titulo, autor, year } = req.body;
    const libro = await Libro.findOne({ where: { id, eliminado: false } });
    if (libro) {
      libro.isbn = isbn;
      libro.titulo = titulo;
      libro.autor = autor;
      libro.year = year;
      await libro.save();
      res.json(libro);
    } else {
      res.status(404).json({ error: 'Libro no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el libro' });
  }
};

const deleteLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const libro = await Libro.findOne({ where: { id, eliminado: false } });
    if (libro) {
      libro.eliminado = true;
      await libro.save();
      res.json({ message: 'Libro eliminado exitosamente' });
    } else {
      res.status(404).json({ error: 'Libro no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el libro' });
  }
};

module.exports = {
  createLibro,
  getLibro,
  getAllLibros,
  updateLibro,
  deleteLibro
};

