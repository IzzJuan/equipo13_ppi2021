const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userFirstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    userLastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    userID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    userEmail: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: "users_userEmail_key"
    },
    userPassword: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "users_userEmail_key",
        unique: true,
        fields: [
          { name: "userEmail" },
        ]
      },
    ]
  });
};
