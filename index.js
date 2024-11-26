const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const urlRoutes = require('./routes/url.routes');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Rate limiting middleware for general routes
const generalLimiter = rateLimit({
  windowMs: 60000, // 1 minute
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests',
    message: 'Please try again after some time'
  },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
    // Skip rate limiting for stats endpoint
    return req.path.startsWith('/stats/');
  }
});

// Apply rate limiting to all requests except stats
app.use(generalLimiter);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', urlRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something broke!'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
