const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/database');
const Libro = require('./book');

const Libreria = sequelize.define('Libreria', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    eliminado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
});
Libreria.hasMany(Libro, { as: 'libros', foreignKey: 'libraryId' });
Libro.belongsTo(Libreria, { as: 'libreria', foreignKey: 'bookId' });

module.exports = Libreria;
