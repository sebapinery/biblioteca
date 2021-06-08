'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations. = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        author.hasMany(models.book);
        author.belongsToMany(models.tag,{
          through: 'books_tags'
        });
    }
  };
  author.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dateOfDeath: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    deletedAt: { 
      type: DataTypes.DATE, 
      required: false, 
      default: null 
    }
  }, {
    sequelize,
    modelName: 'author',
    timestamps: false
  });
  return author;
};