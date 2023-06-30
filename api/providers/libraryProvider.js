const { Library, Book } = require('../models/');

// Provider para crear una librería
const createLibrary = async (name, location, telefono) => {
  try {
    const library = await Library.create({ name, location, telefono });
    return library;
  } catch (error) {
    console.error('Error al crear la librería:', error);
    throw error;
  }
};

// Provider para obtener una librería por su ID
const getLibrary = async (id) => {
  try {
    const library = await Library.findOne({
      where: { id, eliminado: false },
      include: {
        model: Book,
        as: 'books',
        where: { eliminado: false },
        separate: true,
      },
    });

    if (library) {
      return library;
    } else {
      throw new Error('Librería no encontrada');
    }
  } catch (error) {
    console.error('Error al obtener la librería:', error);
    throw error;
  }
};

// Provider para obtener todas las librerías
const getAllLibraries = async () => {
  try {
    const libraries = await Library.findAll({
      where: { eliminado: false },
      include: {
        model: Book,
        as: 'books',
        where: { eliminado: false },
        separate: true,
      },
    });
    return libraries;
  } catch (error) {
    console.error('Error al obtener todas las librerías:', error);
    throw error;
  }
};

// Provider para actualizar una librería
const updateLibrary = async (id, name, location, telefono) => {
  try {
    const library = await Library.findOne({ where: { id, eliminado: false } });

    if (library) {
      library.name = name;
      library.location = location;
      library.telefono = telefono;
      await library.save();
      return library;
    } else {
      throw new Error('Librería no encontrada');
    }
  } catch (error) {
    console.error('Error al actualizar la librería:', error);
    throw error;
  }
};

// Provider para eliminar una librería
const deleteLibrary = async (id) => {
  try {
    const library = await Library.findOne({ where: { id, eliminado: false } });

    if (library) {
      library.eliminado = true;
      await library.save();
      return true;
    } else {
      throw new Error('Librería no encontrada');
    }
  } catch (error) {
    console.error('Error al eliminar la librería:', error);
    throw error;
  }
};

module.exports = {
  createLibrary,
  getLibrary,
  getAllLibraries,
  updateLibrary,
  deleteLibrary,
};
