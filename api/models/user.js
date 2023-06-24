const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Usuario;
