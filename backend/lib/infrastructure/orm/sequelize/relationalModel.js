const sequelize = require('./sequelize');

const users = sequelize.model('users')


module.exports = {
    users
}