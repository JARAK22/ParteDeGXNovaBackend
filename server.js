const express = require('express');

// rutas
const usuarioRouter = require('./rutas/usuarioRouter');
const productoRouter = require('./rutas/productoRouter');

const app = express();
app.use(express.json());

// cors, son los permisos de acceso


app.use('/api', usuarioRouter);
app.use('/api', productoRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});