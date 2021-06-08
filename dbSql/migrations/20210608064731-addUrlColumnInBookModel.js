'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('books', 'url',{
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('books', 'url');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
