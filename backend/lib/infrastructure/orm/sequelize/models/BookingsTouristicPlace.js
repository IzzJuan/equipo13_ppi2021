const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bookings_touristic_place', {
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
    idTouristicPlace: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'touristic_places',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'bookings_touristic_place',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "bookings_touristic_place_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
