'use strict';

const POSTGRESS_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : 'postgres://localhost:5432/lab4';
const {Sequelize , DataTypes} = require('sequelize');

const Collection = require('./collection-class');
const foodModel = require('./food.model');
const clothesModel= require('./clothes.model');

let sequelize = new Sequelize(POSTGRESS_URI);

const foodSchema = foodModel(sequelize,DataTypes);
const clothesSchema = clothesModel(sequelize,DataTypes);

foodSchema.hasMany(clothesSchema, { foreignKey:'clothesId', sourceKey:'id' });
clothesSchema.belongsTo(foodSchema, { foreignKey:'clothesId', sourceKey:'id' });

const foodCollection = new Collection(foodSchema);
const clothesCollection = new Collection (clothesSchema);

module.exports={
  foodCollection:foodCollection,
  clothesCollection:clothesCollection,
  db:sequelize,
};