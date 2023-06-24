const express = require('express');
const app = express();
const {passport} = require('./config/passport');
const libraryRoutes = require('./routes/libraryRoutes');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const {initializeDB} = require('./config/database');

app.use(express.json());
app.use(passport.initialize());

app.use('/library', libraryRoutes);
app.use('/book', bookRoutes);
app.use('/user', userRoutes);

const Usuario = require('./models/user');

// Implementar el manejo de otros errores y configuraciones adicionales

// ...

// Crear el usuario inicial si no existe
const admin = async () => {
  try {
    const usuario = await Usuario.findOne({ where: { name: 'admin' } });
    if (!usuario) {
      await Usuario.create({ name: 'admin', password: 'admin' });
      console.log('Usuario inicial creado: name=admin, password=admin');
    }
  } catch (error) {
    console.error('Error al crear el usuario inicial:', error);
  }
};



const port = process.env.PORT || 3000;
app.listen(port, () => {
    initializeDB();
    admin();
    console.log(`Servidor escuchando en el puerto ${port}`);
});
