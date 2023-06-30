const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userProvider } = require('../providers/');
const { jwtOptions } = require('../config/passport');

const createAdminUser = async (name, password, rol) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await userProvider.createUser({ name, password: hashedPassword, rol });
  } catch (error) {
    console.error('Error al crear el usuario administrador:', error);
    throw error;
  }
};

const createUser = async (name, password, rol) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userProvider.createUser({ name, password: hashedPassword, rol });
    return user;
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    throw error;
  }
};

const getUsers = async () => {
  try {
    const users = await userProvider.getUser();
    return users;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await userProvider.getUserById(id);
    return user;
  } catch (error) {
    console.error('Error al obtener el usuario por ID:', error);
    throw error;
  }
};

const getUserByName = async (name) => {
  try {
    const user = await userProvider.getUserByName(name);
    return user;
  } catch (error) {
    console.error('Error al obtener el usuario por nombre:', error);
    throw error;
  }
};

const login = async (name, password) => {
  try {
    const user = await userProvider.getUserByName(name);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return null;
    }

    const token = jwt.sign({ id: user.id, name: user.name, rol: user.rol }, jwtOptions.secretOrKey, {
      expiresIn: jwtOptions.expiresIn,
    });
    return token;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

const updateUser = async (id, name, password, rol) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userProvider.updateUser(id, name, hashedPassword, rol);
    return user;
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const user = await userProvider.deleteUser(id);
    return user;
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    throw error;
  }
};

module.exports = {
  createAdminUser,
  createUser,
  getUsers,
  getUserById,
  getUserByName,
  login,
  updateUser,
  deleteUser,
};


