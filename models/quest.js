const Sequelize = require('sequelize');
const db = require('../utils/database');

const Quest = db.define('quest', {
    title: {
        type: Sequelize.STRING
    },
    skills: {
        type: Sequelize.STRING
    },
    reward: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    contact: {
        type: Sequelize.STRING
    }
})

module.exports = Quest;