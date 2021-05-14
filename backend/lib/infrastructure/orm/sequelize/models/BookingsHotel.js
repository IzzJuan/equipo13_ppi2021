const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bookings_hotel', {
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
    idHotel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'hotels',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'bookings_hotel',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "bookings_hotel_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
