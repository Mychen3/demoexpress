const {sequelize, Sequelize} = require('../init')
const User = sequelize.define('car_user', {
    user_id: {
        type: Sequelize.INTEGER,
            field: 'user_id',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

    },
    UUID: {
        type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            field: 'UUID'

    },
    user_name: {
        type: Sequelize.STRING,
        field: 'user_name'
    },
    user_passwrod: {
        type: Sequelize.STRING,
        field: 'user_passwrod'
    },
    user_email: {
        type: Sequelize.STRING,
        field: 'user_email'
    },
    user_phone: {
        type: Sequelize.STRING,
        field: 'user_phone'
    },
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
}, {
    // 单数表明变成负数
    freezeTableName: true,
    timestamps: false,
});

module.exports = User
