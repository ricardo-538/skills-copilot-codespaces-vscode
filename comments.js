//Create web server
const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/commentController');

//Handle requests
router.get('/', CommentController.getComments);
router.post('/', CommentController.addComment);
router.delete('/:id', CommentController.deleteComment);
router.put('/:id', CommentController.updateComment);
