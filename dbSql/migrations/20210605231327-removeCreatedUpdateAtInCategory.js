'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.removeColumn('categories', 'createdAt');
    await queryInterface.removeColumn('categories', 'updatedAt');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('categories','createdAt',{
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date()
    });
    await queryInterface.addColumn('categories','updatedAt',{
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: new Date()
    })
  }
};
