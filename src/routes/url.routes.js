const express = require('express');
const router = express.Router();
const { shortenUrl, redirectToUrl, getUrlStats } = require('../controllers/url.controller');

/**
 * @swagger
 * /shorten:
 *   post:
 *     summary: Create a shortened URL
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *     responses:
 *       201:
 *         description: URL shortened successfully
 */
router.post('/shorten', shortenUrl);

/**
 * @swagger
 * /{shortId}:
 *   get:
 *     summary: Redirect to original URL
 *     parameters:
 *       - in: path
 *         name: shortId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       302:
 *         description: Redirect to original URL
 */
router.get('/:shortId', redirectToUrl);

/**
 * @swagger
 * /stats/{shortId}:
 *   get:
 *     summary: Get URL statistics
 *     parameters:
 *       - in: path
 *         name: shortId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: URL statistics
 */
router.get('/stats/:shortId', getUrlStats);

module.exports = router;
