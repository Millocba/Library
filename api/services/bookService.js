const { bookProvider } = require('../providers');

// Servicio para crear un book
const createBook = async (isbn, titulo, autor, year, libraryId) => {
  try {
    const book = await bookProvider.createBook(isbn, titulo, autor, year, libraryId);
    return book;
  } catch (error) {
    console.error('Error al crear el book:', error);
    throw error;
  }
};

// Servicio para obtener un book por su ID
const getBook = async (id) => {
  try {
    const book = await bookProvider.getBook(id);
    return book;
  } catch (error) {
    console.error('Error al obtener el book por ID:', error);
    throw error;
  }
};

// Servicio para obtener todos los books
const getAllBooks = async () => {
  try {
    const books = await bookProvider.getAllBooks();
    return books;
  } catch (error) {
    console.error('Error al obtener todos los books:', error);
    throw error;
  }
};

// Servicio para actualizar un book
const updateBook = async (id, isbn, titulo, autor, year) => {
  try {
    const book = await bookProvider.updateBook(id, isbn, titulo, autor, year);
    return book;
  } catch (error) {
    console.error('Error al actualizar el book:', error);
    throw error;
  }
};

// Servicio para eliminar un book
const deleteBook = async (id) => {
  try {
    const success = await bookProvider.deleteBook(id);
    return success;
  } catch (error) {
    console.error('Error al eliminar el book:', error);
    throw error;
  }
};

// Servicio para eliminar las foreign keys de los books
const deleteBooksForeignKeyToNull = async (libraryId) => {
  try {
    await bookProvider.libraryIdNull(libraryId);
  } catch (error) {
    console.error('Error al actualizar las foreign keys de los books:', error);
    throw error;
  }
};

module.exports = {
  createBook,
  getBook,
  getAllBooks,
  updateBook,
  deleteBook,
  deleteBooksForeignKeyToNull
};
