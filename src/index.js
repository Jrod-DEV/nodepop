/* eslint-disable no-console */
// Arrancar la app
const app = require('./server');

app.listen(app.get('port'), () => {
  console.log('Listening on port: 3000');
});
