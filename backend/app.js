// backend/app.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const app = express();
const PORT = 5000;

// Conectar a MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Servir la carpeta "frontend" de forma estática
app.use(express.static(path.join(__dirname, '../frontend')));

// Ruta raíz (opcional)
// Si entras a http://localhost:5000/ te mostrará index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Rutas de la API
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/subscriptions', require('./routes/subscriptionRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/supplements', require('./routes/supplementRoutes'));
app.use('/api/routines', require('./routes/routineRoutes'));
app.use('/api/nutrition', require('./routes/nutritionRoutes'));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
