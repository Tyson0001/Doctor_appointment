const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db.js');

// dotenv
dotenv.config();

// connect to db
connectDB();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/user', require('./routes/userRoutes.js'));

// listen
const PORT = process.env.PORT || 8070;

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.NODE_MODE}MADE ON ${process.env.PORT} `
    .bgCyan.black);
})