// index.js
const express = require('express');
const app = express();

// Ruta para la página principal
app.get('/', (req, res) => {
    res.send('<h1>¡Hola Mundo - DAVID MACHADO!</h1>');
});

// Escuchar en el puerto adecuado
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}/`);
});
