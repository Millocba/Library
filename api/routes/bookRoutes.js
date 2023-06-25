const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middlewares/authMiddleware');
const {
  createLibro,
  getLibro,
  getAllLibros,
  updateLibro,
  deleteLibro
} = require('../controllers/bookController');

router.post('/', authenticateJWT, createLibro);
router.get('/:id', getLibro);
router.get('/', getAllLibros);
router.put('/:id', authenticateJWT, updateLibro);
router.patch('/:id', authenticateJWT, deleteLibro);

module.exports = router;
