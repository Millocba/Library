const Libreria = require('../models/library');

const createLibreria = async (req, res) => {
  try {
    const { name, location, telefono } = req.body;
    const libreria = await Libreria.create({ name, location, telefono });
    res.json(libreria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la librería' });
  }
};

const getLibreria = async (req, res) => {
  try {
    const { id } = req.params;
    const libreria = await Libreria.findOne({ where: { id, eliminado: false } });
    if (libreria) {
      res.json(libreria);
    } else {
      res.status(404).json({ error: 'Librería no encontrada' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la librería' });
  }
};

const getAllLibrerias = async (req, res) => {
  try {
    const librerias = await Libreria.findAll({include: {all:true}, where: { eliminado: false }});
    res.json(librerias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las librerías' });
  }
};

const updateLibreria = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, telefono } = req.body;

    const libreria = await Libreria.findOne({ where: { id, eliminado: false } });
    if (!libreria) {
      return res.status(404).json({ error: 'Librería no encontrada' });
    }

    libreria.name = name;
    libreria.location = location;
    libreria.telefono = telefono;

    await libreria.save();

    res.json(libreria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la librería' });
  }
};

const deleteLibreria = async (req, res) => {
  try {
    const { id } = req.params;

    const libreria = await Libreria.findOne({ where: { id, eliminado: false } });
    if (!libreria) {
      return res.status(404).json({ error: 'Librería no encontrada' });
    }

    libreria.eliminado = true;
    await libreria.save();

    res.json({ message: 'Librería marcada como eliminada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al marcar la librería como eliminada' });
  }
};

module.exports = {
  createLibreria,
  getLibreria,
  getAllLibrerias,
  updateLibreria,
  deleteLibreria
};

