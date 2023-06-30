const express = require('express');
const app = express();
const { passport } = require('./config/passport');
const { libraryRoutes } = require('./routes/');
const { bookRoutes } = require('./routes/');
const { userRoutes } = require('./routes/');
const { initializeDB } = require('./config/database');
const { admin } = require('./controllers/userController');
const { handleEmptyResponse } = require('./middlewares/handleEmptyResponse');

app.use(express.json());
app.use(passport.initialize());

// Manejo de respuestas vacias
app.use(handleEmptyResponse);

app.use('/library', libraryRoutes);
app.use('/book', bookRoutes);
app.use('/user', userRoutes);



// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

const port = process.env.PORT || 3000;
app.listen(port, async () => {
  try {
    await initializeDB();
    await admin();
    console.log(`Servidor escuchando en el puerto ${port}`);
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
});

