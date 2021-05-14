const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hotels', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idPlace: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'places',
        key: 'id'
      }
    },
    hotelName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hotelDesc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    hotelPhotos: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hotels',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "hotels_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
