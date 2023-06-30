const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middlewares/authMiddleware');
const {libraryController} = require('../controllers/');

router.post('/', authenticateJWT, libraryController.createLibrary);
router.get('/:id', libraryController.getLibrary);
router.get('/', libraryController.getAllLibraries);
router.put('/:id', authenticateJWT, libraryController.updateLibrary);
router.patch('/:id', authenticateJWT, libraryController.deleteLibrary);

module.exports = router;
