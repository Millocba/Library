const {userService} = require('../services/');
const User = require('../models/user');

 // Controller para crear usuario inicial
 const admin = async () => {
  try {
    const user = await userService.getUsers();
  if(user.length==0){
    const newUser = await userService.createAdminUser('admin','admin','admin');
    console.log('Usuario inicial creado: name=admin, password=admin');
  }
  } catch (error) {
    console.error('Error creando al usuario:', error);

  }
};

 // Controller para crear usuario
const createUser = async (req, res) => {
  const { name, password, rol } = req.body;

  try {
    const newUser = await userService.createUser(name, password, rol);
    return res.json({ newUser });
  } catch (error) {
    console.error('Error creando al usuario:', error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controller para traer todos los usuarios
const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    return res.json({ users });
  } catch (error) {
    console.error('Error al traer los usuarios:', error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controller para traer un usuario por id
const getUsersById = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    return res.json({ user });
  } catch (error) {
    console.error('Error al traer los usuarios:', error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controller para iniciar sesión
const login = async (req, res) => {
  const { name, password } = req.body;

  try {
    const token = await userService.login(name, password);
    if (!token) {
      return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
    }
    return res.json({ token });
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controller para actualizar un usuario por id
const updateUser = async (req, res) => {
  try {
      const { userId } = req.params;

      const { name, password, rol } = req.body;

      const user = await userService.updateUser(userId, name, password, rol);

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    return res.json(user);
  } catch (error) {
    console.error('Error al traer los usuarios:', error);
    return res.status(500).json({ message: 'Error en el servidor' });
  }
};

// Controller para eliminar un usuario
const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const success = await userService.deleteUser(userId);
    if (success) {
      res.json({ message: 'Usuario eliminado' });
    } else {
      res.status(404).json({ error: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar' });
  }
};

module.exports = { createUser, getUsers, getUsersById, login, admin, updateUser, deleteUser};
