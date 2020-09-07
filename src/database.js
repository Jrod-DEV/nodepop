/* eslint-disable no-console */
// Mongoose
const mongoose = require('mongoose');

/* const NODDEPOP_API_MONGODB_HOST = process.env.MONGODB_HOST;
const NODDEPOP_API_MONGODB_DATABASE = process.env.MONGODB_DATABASE; */
const { NODEPOP_API_MONGODB_HOST, NODEPOP_API_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${NODEPOP_API_MONGODB_HOST}/${NODEPOP_API_MONGODB_DATABASE}`; // Cadena de conexión a DB

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})

  .then(db => console.log('Database is connected'))
  .catch(err => console.log(err));
