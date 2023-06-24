const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middlewares/authMiddleware');
const {
  createLibreria,
  getLibreria,
  getAllLibrerias,
  // Importar los demás controladores de Libreria
} = require('../controllers/libraryController');

router.post('/', authenticateJWT, createLibreria);
router.get('/:id', getLibreria);
router.get('/', getAllLibrerias);
// Definir las demás rutas de Libreria

module.exports = router;
