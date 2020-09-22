const {sequelize, Sequelize} = require('../init')

const type1 = sequelize.define('car_type1',{
    type_id1: {
        type: Sequelize.INTEGER,
        field: 'type_id1',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    type_Name1: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'type_Name1',
    },
    type_path: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'type_path',
    },
    type_pid:{
        type: Sequelize.INTEGER,
        field: 'type_pid',

    },
},{
    // 单数表明变成负数
    freezeTableName: true,
    timestamps: false,
});



module.exports = type1
