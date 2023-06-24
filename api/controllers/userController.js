const jwt = require('jsonwebtoken');
const Usuario = require('../models/user');
const { jwtOptions } = require('../config/passport');

// Controlador para el inicio de sesión (Login)
exports.login = async (req, res) => {
  const { name, password } = req.body;

  try {
    // Buscar al usuario en la base de datos
    const usuario = await Usuario.findOne({ where: { name } });

    // Verificar si el usuario existe y la contraseña es correcta
    if (!usuario || usuario.password !== password) {
      return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
    }

    // Generar el token JWT
    const token = jwt.sign({ id: usuario.id, name: usuario.name }, jwtOptions.secretOrKey);

    // Enviar el token como respuesta
    return res.json({ token });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

