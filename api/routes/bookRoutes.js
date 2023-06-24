const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middlewares/authMiddleware');
const {
  createLibro,
  getLibro,
  getAllLibros,
  // Importar los demás controladores de Libro
} = require('../controllers/bookController');

router.post('/', authenticateJWT, createLibro);
router.get('/:id', getLibro);
router.get('/', getAllLibros);
// Definir las demás rutas de Libro

module.exports = router;
