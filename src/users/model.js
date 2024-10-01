const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");

const User = sequelize.define(
    "user",
    {
        username:{
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    { timestamp: false }
);

    module.exports = User;