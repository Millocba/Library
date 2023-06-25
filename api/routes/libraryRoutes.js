const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middlewares/authMiddleware');
const {
  createLibreria,
  getLibreria,
  getAllLibrerias,
  updateLibreria,
  deleteLibreria,
} = require('../controllers/libraryController');

router.post('/', authenticateJWT, createLibreria);
router.get('/:id', getLibreria);
router.get('/', getAllLibrerias);
router.put('/:id', authenticateJWT, updateLibreria);
router.patch('/:id', authenticateJWT, deleteLibreria);

module.exports = router;
