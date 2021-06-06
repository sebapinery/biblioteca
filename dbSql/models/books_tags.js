'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class books_tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      books_tags.belongsTo(models.book,{
        foreignKey: 'bookId',
        as: 'books'
      });
      books_tags.belongsTo(models.tag,{
        foreignKey: 'tagId',
        as: 'tags'
      })
    }
  };
  books_tags.init({
    bookId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'books_tags',
  });
  return books_tags;
};