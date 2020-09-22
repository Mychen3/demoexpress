const Sequelize = require('sequelize')

//database wide options
var opts = {
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    }
}
const sequelize = new Sequelize('study_car', 'root', 'root123',{
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
},opts);
module.exports = {Sequelize, sequelize}
