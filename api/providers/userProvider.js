const { User } = require('../models/');

const createUser = async (userData) => {
  try {
    const user = await User.create(userData);
    return user;
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    throw error;
  }
};

const getUser = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    throw error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    console.error('Error al obtener el usuario por ID:', error);
    throw error;
  }
};

const getUserByName = async (name) => {
  try {
    const user = await User.findOne({ where: { name } });
    return user;
  } catch (error) {
    console.error('Error al obtener el usuario por nombre:', error);
    throw error;
  }
};

const updateUser = async (id, name, password, rol) => {
  try {
    const user = await User.findByPk(id);

    if (user) {
      user.name = name;
      user.password = password;
      user.rol = rol;
      await user.save();
      return user;
    } else {
      throw new Error('Usuario no encontrado');
    }
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    throw error;
  }
};

const deleteUser = async (id) => {
  try {
    const user = await User.findByPk(id);

    if (user) {
      await user.destroy();
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    throw error;
  }
};

module.exports = {
  createUser,
  getUser,
  getUserById,
  getUserByName,
  updateUser,
  deleteUser,
};


