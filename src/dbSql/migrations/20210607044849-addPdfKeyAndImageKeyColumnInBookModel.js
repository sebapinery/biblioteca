'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.addColumn('books','pdfKey', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    })
    await queryInterface.addColumn('books', 'imageKey',{
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('books', 'pdfKey');
    await queryInterface.removeColumn('books', 'imageKey');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
