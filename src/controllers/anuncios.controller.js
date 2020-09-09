/* eslint-disable no-console */
const anunciosCtrl = {};

const Anuncio = require('../models/Nodepop');

anunciosCtrl.renderAnuncioForm = (req, res) => {
  res.send('Articles add');
};

anunciosCtrl.createNewAnuncio = async (req, res) => {
  const {
    nombre, venta, precio, foto, tags,
  } = req.body;
  const newAnuncio = new Anuncio({
    nombre, venta, precio, foto, tags,
  });
  await newAnuncio.save();
  // console.log(newAnuncio);
  res.send('New anuncio created');
};

anunciosCtrl.renderAnuncios = async (req, res) => {
  const anuncios = await Anuncio.find();
  res.render('anuncios/all-anuncios', { anuncios });
  // res.send('Render anuncios');
};

anunciosCtrl.renderEditForm = (req, res) => {
  res.send('Render edit form');
};

anunciosCtrl.updateAnuncio = (req, res) => {
  res.send('Anuncio updated');
};

anunciosCtrl.deleteAnuncio = (req, res) => {
  res.send('Deleting anuncio...');
};

module.exports = anunciosCtrl;
