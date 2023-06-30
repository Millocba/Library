const { libraryProvider } = require('../providers/');

// Servicio para crear una librería
const createLibrary = async (name, location, telefono) => {
  try {
    const library = await libraryProvider.createLibrary(name, location, telefono);
    return library;
  } catch (error) {
    console.error('Error al crear la librería:', error);
    throw error;
  }
};

// Servicio para obtener una librería por su ID
const getLibrary = async (id) => {
  try {
    const library = await libraryProvider.getLibrary(id);
    return library;
  } catch (error) {
    console.error('Error al obtener la librería por ID:', error);
    throw error;
  }
};

// Servicio para obtener todas las librerías
const getAllLibraries = async () => {
  try {
    const libraries = await libraryProvider.getAllLibraries();
    return libraries;
  } catch (error) {
    console.error('Error al obtener todas las librerías:', error);
    throw error;
  }
};

// Servicio para actualizar una librería
const updateLibrary = async (id, name, location, telefono) => {
  try {
    const library = await libraryProvider.updateLibrary(id, name, location, telefono);
    return library;
  } catch (error) {
    console.error('Error al actualizar la librería:', error);
    throw error;
  }
};

// Servicio para eliminar una librería
const deleteLibrary = async (id) => {
  try {
    const success = await libraryProvider.deleteLibrary(id);
    return success;
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
  deleteLibrary
};
