const { Sequelize,DataTypes } = require('sequelize');
const config = require('../../config/database');
const db = {}

db.connection = new Sequelize(config.database, config.username, config.password, config);

db.User=require('../models/User')(db.connection,DataTypes)
//db.Adress=require('../models/Adress')(db.connection,DataTypes)

module.exports = db;