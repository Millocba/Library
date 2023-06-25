const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middlewares/authMiddleware');
const {
  createUser,
  getUsers,
  getUsersId,
  login,
} = require('../controllers/userController');

// Rutas públicas
router.post('/login', login);
router.post('/', createUser);

// Rutas protegidas (requieren autenticación)
router.get('/', authenticateJWT, getUsers);
router.get('/:usuarioId', authenticateJWT, getUsersId);

module.exports = router;

