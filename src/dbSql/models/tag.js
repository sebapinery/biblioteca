'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tag.belongsToMany(models.book, {
        through: 'books_tags'
      })
      tag.belongsToMany(models.author, {
        through: 'books_tags'
      });
      tag.belongsToMany(models.quotes, {
        through: 'books_tags'
      })
    }
  };
  tag.init({
    tagName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tag',
  });
  return tag;
};