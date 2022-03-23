'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

class Portfolio extends Model {}

Portfolio.init(
  {
    uid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    stock_code: DataTypes.STRING,
    entry: DataTypes.DECIMAL,
  },
  {
    sequelize,
    modelName: 'portfolio',
    tableName: 'portfolio',
    timestamps: true,
    version: false,
  }
);

module.exports = Portfolio;
