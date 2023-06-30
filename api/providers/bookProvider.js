const { Book } = require('../models');

// Proveedor para crear un book
const createBook = async (isbn, titulo, autor, year, libraryId) => {
  try {
    const book = await Book.create({ isbn, titulo, autor, year, libraryId });
    return book;
  } catch (error) {
    console.error('Error al crear el libro:', error);
    throw error;
  }
};

// Proveedor para obtener un book por su ID
const getBook = async (id) => {
  try {
    const book = await Book.findOne({ where: { id, eliminado: false } });
    return book;
  } catch (error) {
    console.error('Error al obtener el libro por ID:', error);
    throw error;
  }
};

// Proveedor para obtener todos los books
const getAllBooks = async () => {
  try {
    const books = await Book.findAll({ where: { eliminado: false } });
    return books;
  } catch (error) {
    console.error('Error al obtener todos los libros:', error);
    throw error;
  }
};

// Proveedor para actualizar un book
const updateBook = async (id, isbn, titulo, autor, year) => {
  try {
    const book = await Book.findOne({ where: { id, eliminado: false } });

    if (book) {
      book.isbn = isbn;
      book.titulo = titulo;
      book.autor = autor;
      book.year = year;
      await book.save();
      return book;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error al actualizar el libro:', error);
    throw error;
  }
};

// Proveedor para eliminar un book
const deleteBook = async (id) => {
  try {
    const book = await Book.findOne({ where: { id, eliminado: false } });

    if (book) {
      book.eliminado = true;
      await book.save();
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error al eliminar el libro:', error);
    throw error;
  }
};

// Proveedor para actualizar los books de una biblioteca a null
const libraryIdNull = async (libraryId) => {
  try {
    const books = await Book.findAll({ where: { libraryId } });

    for (const book of books) {
      book.libraryId = null;
      await book.save();
    }

    return true;
  } catch (error) {
    console.error('Error al actualizar los libros:', error);
    throw error;
  }
};

module.exports = {
  createBook,
  getBook,
  getAllBooks,
  updateBook,
  deleteBook,
  libraryIdNull,
};
