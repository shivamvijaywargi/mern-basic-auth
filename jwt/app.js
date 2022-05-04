const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');

const app = express();

// Cookie Parser
app.use(cookieParser());

// configuring cors and setting cors middleware
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));

// Express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
