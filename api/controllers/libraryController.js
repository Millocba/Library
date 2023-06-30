const {libraryService} = require('../services/');
const {bookService} = require('../services/');

// Controller para crear una librería
const createLibrary = async (req, res) => {
  try {
    const { name, location, telefono } = req.body;
const library = await libraryService.createLibrary(name, location, telefono);
    res.json(library);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la librería' });
  }
};

// Controller para obtener una librería por su ID
const getLibrary = async (req, res) => {
  try {
    const { id } = req.params;
const library = await libraryService.getLibrary(id);
    if (library) {
      res.json(library);
    } else {
      res.status(404).json({ error: 'Librería no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la librería' });
  }
};

// Controller para obtener todas las librerías
const getAllLibraries = async (req, res) => {
  try {
    const libraries = await libraryService.getAllLibraries();
    res.json(libraries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las librerías' });
  }
};

// Controller para actualizar una librería
const updateLibrary = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, telefono } = req.body;

    const library = await libraryService.updateLibrary(id, name, location, telefono);
    if (library) {
      res.json(library);
    } else {
      res.status(404).json({ error: 'Librería no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la librería' });
  }
};

// Controller para eliminar una librería
const deleteLibrary = async (req, res) => {
  try {
    const { id } = req.params;

    const success = await libraryService.deleteLibrary(id);
    if (success) {
      await bookService.deleteBooksForeignKeyToNull(id);
      res.json({ message: 'Librería marcada como eliminada' });
    } else {
      res.status(404).json({ error: 'Librería no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al marcar la librería como eliminada' });
  }
};

module.exports = {
  createLibrary,
  getLibrary,
  getAllLibraries,
  updateLibrary,
  deleteLibrary
};


