const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();

// Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Connection to DB
connectDB();

// Routes
const userRoute = require('./routes/userRoute');
app.use('/api/v1', userRoute);

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Hello from Home ExpressJS',
  });
});

module.exports = app;
