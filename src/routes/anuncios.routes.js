const { Router } = require('express');

const router = Router();

const {
  renderAnuncioForm,
  createNewAnuncio,
  renderAnuncios,
  renderEditForm,
  updateAnuncio,
  deleteAnuncio,
} = require('../controllers/anuncios.controller'); // Importamos todas las funciones desde la ubicación mencionada

// Defimos rutas Url (GET, POST, PUT...)

// New anuncio
router.get('/anuncios/add', renderAnuncioForm); // not used (form from postman)

router.post('/anuncios/new-anuncio', createNewAnuncio);

// Get all Anuncios
router.get('/anuncios', renderAnuncios); 

// Update / Edit anuncios
router.get('/anuncios/edit/:id', renderEditForm);

router.put('/anuncios/edit/:id', updateAnuncio);

// Delete anuncios
router.delete('/anuncios/delete/:id', deleteAnuncio);

module.exports = router;
