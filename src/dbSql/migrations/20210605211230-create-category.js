'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addColumn('books', 'categoryId',{
      type: Sequelize.INTEGER,
      references: {
        model:'categories',
        key: 'id'
      }
    })

  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
    await queryInterface.removeColumn('books', 'categoryId');
  }
};