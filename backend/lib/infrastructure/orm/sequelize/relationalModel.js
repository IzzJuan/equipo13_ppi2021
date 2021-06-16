const sequelize = require("./sequelize");

const users = sequelize.model("users");

const hotels = sequelize.model("hotels");

const cities = sequelize.model("cities");

module.exports = {
  users,
  hotels,
  cities,
};
