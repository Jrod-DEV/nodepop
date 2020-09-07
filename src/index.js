/* eslint-disable no-console */
// Arrancar la app
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config(); // Carga variables de entorno

const app = require('./server');
require('./database');

app.listen(app.get('port'), () => {
  console.log('Listening on port:', app.get('port'));
});
