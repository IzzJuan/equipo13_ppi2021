const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_trip_place', {
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
    idPlace: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'places',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'users_trip_place',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_trip_place_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
