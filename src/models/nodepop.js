// eslint-disable-next-line no-unused-vars
const { Schema, model } = require('mongoose'); // Definir modelo de la base de datos de MongoDB

const AnuncioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  venta: {
    type: Boolean,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  foto: {
    type: String,
    required: true,
  },
  tags: [String],
}, {
  timestamps: true, // Nos lanzazrá la hora de creación del anuncio
});

module.exports = model('Anuncio', AnuncioSchema, 'anuncios');
