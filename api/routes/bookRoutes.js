const express = require('express');
const router = express.Router();
const { authenticateJWT } = require('../middlewares/authMiddleware');
const {bookController} = require('../controllers/');

router.post('/', authenticateJWT, bookController.createBook);
router.get('/:id', bookController.getBook);
router.get('/', bookController.getAllBooks);
router.put('/:id', authenticateJWT, bookController.updateBook);
router.patch('/:id', authenticateJWT, bookController.deleteBook);


module.exports = router;
