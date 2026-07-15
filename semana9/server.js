const express = require('express');
const app = express();

// Ruta raíz que confirma el estado básico del servidor
app.get('/', (req, res) => {
  res.send('Servidor activo y funcionando');
});

// Ruta GET /estado para el monitoreo básico del servicio
app.get('/estado', (req, res) => {
  res.json({
    estado: "Servidor funcionando",
    servicio: "API comunitaria"
  });
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});