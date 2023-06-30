const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middlewares/authMiddleware');
const {userController} = require('../controllers');

// Rutas públicas
router.post('/login', userController.login);
router.post('/', userController.createUser);

// Rutas protegidas (requieren autenticación)
router.get('/', authenticateJWT, userController.getUsers);
router.get('/:userId', authenticateJWT, userController.getUsersById);
router.put('/:userId', authenticateJWT, userController.updateUser);
router.delete('/:userId', authenticateJWT, userController.deleteUser);

module.exports = router;

