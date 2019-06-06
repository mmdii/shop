const Sequelize = require('sequelize');
    const sequelize = new Sequelize('node-complete', 'root', 'rootpasswordgiven', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;

