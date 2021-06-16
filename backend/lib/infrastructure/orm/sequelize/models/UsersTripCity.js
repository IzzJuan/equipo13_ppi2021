const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_trip_city', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    idCity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cities',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'users_trip_city',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_trip_city_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
