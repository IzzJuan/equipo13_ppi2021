const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('places', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    placeName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    placeDesc: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    placePhotos: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'places',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "places_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
