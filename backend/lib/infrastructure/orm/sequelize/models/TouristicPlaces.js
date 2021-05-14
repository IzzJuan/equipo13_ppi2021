const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('touristic_places', {
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
    touristicPlaceName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    touristicPlaceDesc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    touristicPlacePhotos: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'touristic_places',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "touristic_places_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
