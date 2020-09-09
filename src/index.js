/* eslint-disable no-console */

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config(); // Carga variables de entorno

// Arrancar la app
const app = require('./server');
require('./database');

app.listen(app.get('port'), () => {
  console.log('Listening on port', `${app.get('port')} at: http://localhost:3000`);
});
