const jwt = require('jsonwebtoken');
const Usuario = require('../models/user');
const { jwtOptions } = require('../config/passport');

// Crear usuario
const createUser = async (req, res) => {
  const { name, password, rol } = req.body;

  try { 
    const newUser = await Usuario.create({ name, password, rol});
    return res.json({ newUser });

  }catch (error) {
    console.error('Error creando al usuario:', error);
    return res.status(500).json({ message: 'Error en el servidor' });
  };
}

//traer usuarios
const getUsers = async (req, res) => {
  try {
    const users = await Usuario.findAll();
    return res.json({ users });
  } catch (error) {
    console.error('Error al traer los usuarios:', error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }

};

//traer usuarios
const getUsersId = async (req, res) => {
  try {
    const user = await Usuario.findByPk(req.params.usuarioId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.json({ user });
  } catch (error) {
    console.error('Error al traer los usuarios:', error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }

};


// Controlador para el inicio de sesión (Login)
const login = async (req, res) => {
  const { name, password } = req.body;

  try {
    // Buscar al usuario en la base de datos
    const usuario = await Usuario.findOne({ where: { name } });

    // Verificar si el usuario existe y la contraseña es correcta
    if (!usuario || usuario.password !== password) {
      return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
    }

    // Generar el token JWT
    const token = jwt.sign({ id: usuario.id, name: usuario.name, rol: usuario.rol}, jwtOptions.secretOrKey, { expiresIn: jwtOptions.expiresIn });

    // Enviar el token como respuesta
    return res.json({ token });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
}



// Crear el usuario inicial si no existe
const admin = async () => {
    try {
      const usuario = await Usuario.findOne({ where: { name: 'admin' } });
      if (!usuario) {
    await Usuario.create({ name: 'admin', password: 'admin', rol:'admin' });
        console.log('Usuario inicial creado: name=admin, password=admin');
      }
    } catch (error) {
      console.error('Error al crear el usuario inicial:', error);
    }
  };

module.exports = {login, admin, createUser, getUsers, getUsersId};

