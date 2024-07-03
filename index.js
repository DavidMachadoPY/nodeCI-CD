// app.js
const http = require('http');

// Crear un servidor HTTP
const server = http.createServer((req, res) => {
    // Establecer el encabezado de la respuesta
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Escribir la respuesta
    res.end('<h1>¡Hola Mundo desde Node.js!</h1>');
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000/');
});
