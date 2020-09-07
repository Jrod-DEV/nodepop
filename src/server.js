// Express - Código del servidor

const express = require('express');
const path = require('path'); // Setting that allows node to find the 'views' folder in any enviroment.

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views'));

// Middlewares
// Conversion of any data type that comes from a formulary through methods to JSON.
app.use(express.urlencoded({ extended: false }));

// Gobal Variables

// Routes
// URLs
app.get('/', (req, res) => {
  res.send('Welcome To Nodeapi');
});

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
