const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bookings_restaurant', {
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
    idRestaurant: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'restaurants',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'bookings_restaurant',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "bookings_restaurant_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
