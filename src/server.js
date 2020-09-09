// Express - Código del servidor

const express = require('express');

const exphbs = require('express-handlebars');
const path = require('path'); // Setting that allows node to find the 'views' folder in any enviroment.
const morgan = require('morgan');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views'));
app.engine('hbs', exphbs({
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',
}));

app.set('view engine', '.hbs');

// Middlewares
// Conversion of any data type that comes from a formulary through methods to JSON.
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
// Gobal Variables

// Routes - URLs
app.use(require('./routes/index.routes'));
app.use(require('./routes/anuncios.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
