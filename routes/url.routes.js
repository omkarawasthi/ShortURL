const express = require('express');
const router = express.Router();
const { shortenUrl, redirectToUrl, getUrlStats } = require('../controllers/url.controller');

// Create shortened URL
router.post('/shorten', shortenUrl);

// Redirect to original URL
router.get('/:shortId', redirectToUrl);

// Get URL statistics
router.get('/stats/:shortId', getUrlStats);

module.exports = router;
