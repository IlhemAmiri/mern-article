const express = require('express');
const {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
} = require('../controllers/articleController');
const router = express.Router();

// Create a new article
router.post('/', createArticle);

// Get all articles
router.get('/', getAllArticles);

// Get a single article by ID
router.get('/:id', getArticleById);

// Update an article
router.put('/:id', updateArticle);

// Delete an article
router.delete('/:id', deleteArticle);

module.exports = router;
