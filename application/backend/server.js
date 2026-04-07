const http = require('http');
const app = require('./app');

console.log('voila du code')

app.set('port', process.env.PORT || 3001);
const server = http.createServer(app);

server.listen(process.env.PORT || 3001, '0.0.0.0', () => {
    console.log('Serveur en écoute sur http://localhost:3001');
});