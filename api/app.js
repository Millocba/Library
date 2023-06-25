const express = require('express');
const app = express();
const {passport} = require('./config/passport');
const libraryRoutes = require('./routes/libraryRoutes');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const {initializeDB} = require('./config/database');
const {admin} = require('./controllers/userController');

app.use(express.json());
app.use(passport.initialize());

app.use('/library', libraryRoutes);
app.use('/book', bookRoutes);
app.use('/user', userRoutes);


// Implementar el manejo de otros errores y configuraciones adicionales




const port = process.env.PORT || 3000;
app.listen(port, async () => {
    await initializeDB();
    await admin();  
    console.log(`Servidor escuchando en el puerto ${port}`);
});
