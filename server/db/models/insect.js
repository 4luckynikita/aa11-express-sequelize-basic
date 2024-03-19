'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Insect.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
        validate: {
          isTitleCased(value) {
            const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (!capitals.split('').includes(value.split('')[0])) {
              throw new Error('not Title Cased');
            }
          }
        }
    },
    description: DataTypes.STRING,
    territory: DataTypes.STRING,
    fact: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 240],
      }
    },
    millimeters: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: true
    }, 
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};