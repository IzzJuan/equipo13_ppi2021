const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('restaurants', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idCity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cities',
        key: 'id'
      }
    },
    restaurantName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    restaurantDesc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    restaurantPhotos: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'restaurants',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "restaurants_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
