const {sequelize, Sequelize} = require('../init')

const type = sequelize.define('car_type', {
    type_id: {
        type: Sequelize.INTEGER,
        field: 'type_id',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    type_Name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'type_Name'
    },
    type_pid: {
        type: Sequelize.INTEGER,
        field: 'type_pid'
    },
}, {
    // 单数表明变成负数
    freezeTableName: true,
    timestamps: false,

});


module.exports = type
