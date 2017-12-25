const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/{yourdb}', { logging: false, operatorsAliases: false });

module.exports = db;