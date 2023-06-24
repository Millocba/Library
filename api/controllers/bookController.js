const Libro = require('../models/book');

async function createLibro(req, res) {
  try {
    const { isbn, titulo, autor, year, library } = req.body;
    const libro = await Libro.create({ isbn, titulo, autor, year, library });
    res.json(libro);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el libro' });
  }
}

async function getLibro(req, res) {
  try {
    const { id } = req.params;
    const libro = await Libro.findByPk(id);
    if (libro) {
      res.json(libro);
    } else {
      res.status(404).json({ error: 'Libro no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el libro' });
  }
}

async function getAllLibros(req, res) {
  try {
    const libros = await Libro.findAll();
    res.json(libros);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los libros' });
  }
}

// Implementar los controladores restantes para actualizar y eliminar libros

module.exports = {
  createLibro,
  getLibro,
  getAllLibros,
  // Exportar los demás controladores
};
