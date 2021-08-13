'use strict';


const food = (sequelize,DataTypes) => sequelize.define('food',{
  foodType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  foodName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports=food;