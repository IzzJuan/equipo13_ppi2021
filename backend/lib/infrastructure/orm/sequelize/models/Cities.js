const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cities', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cityName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idDepartment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'departments',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'cities',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cities_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
