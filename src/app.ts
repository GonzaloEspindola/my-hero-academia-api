import express from 'express';
import routes from './routes/index';
const PORT = 3000;
const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/api', routes);

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});