const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'user',
    {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        email:{
            type: Sequelize.STRING
        },

        senha:{
            type: Sequelize.STRING
        },

        criacao:{
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)