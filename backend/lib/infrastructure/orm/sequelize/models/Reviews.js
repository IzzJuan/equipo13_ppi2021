const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reviews', {
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
    },
    reviewPoints: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    reviewDesc: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'reviews',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "reviews_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
