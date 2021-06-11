'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      book.belongsTo(models.author);
      book.belongsTo(models.category);
      book.belongsToMany(models.tag,{
        through: 'books_tags'
      });
    }
  };
  book.init({
    name: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    deletedAt: { 
      type: DataTypes.DATE, 
      required: false, 
      default: null 
    },
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};