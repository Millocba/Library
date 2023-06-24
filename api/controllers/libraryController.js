const Libreria = require('../models/library');

async function createLibreria(req, res) {
  try {
    const { name, location, telefono } = req.body;
    const libreria = await Libreria.create({ name, location, telefono });
    res.json(libreria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la librería' });
  }
}

async function getLibreria(req, res) {
  try {
    const { id } = req.params;
    const libreria = await Libreria.findByPk(id);
    if (libreria) {
      res.json(libreria);
    } else {
      res.status(404).json({ error: 'Librería no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la librería' });
  }
}

async function getAllLibrerias(req, res) {
  try {
    const librerias = await Libreria.findAll();
    res.json(librerias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las librerías' });
  }
}

// Implementar los controladores restantes para actualizar y eliminar librerías

module.exports = {
  createLibreria,
  getLibreria,
  getAllLibrerias,
  // Exportar los demás controladores
};
