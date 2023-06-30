const {bookService} = require('../services');

// Controlador para crear un book
const createBook = async (req, res) => {
  try {
    const { isbn, titulo, autor, year, libraryId } = req.body;
    const book = await bookService.createBook(isbn, titulo, autor, year, libraryId);
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el libro' });
  }
};

// Controlador para obtener un book por su ID
const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getBook(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'libro no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el libro' });
  }
};

// Controlador para obtener todos los books
const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los libros' });
  }
};

// Controlador para actualizar un book
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { isbn, titulo, autor, year } = req.body;
    const book = await bookService.updateBook(id, isbn, titulo, autor, year);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: 'Libro no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el libro' });
  }
};

// Controlador para eliminar un book
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const success = await bookService.deleteBook(id);
    if (success) {
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
  createBook,
  getBook,
  getAllBooks,
  updateBook,
  deleteBook
};
