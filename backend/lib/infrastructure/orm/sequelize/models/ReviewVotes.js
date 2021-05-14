const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('review_votes', {
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
    idReview: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'reviews',
        key: 'id'
      }
    },
    usefulReview: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'review_votes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "review_votes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
