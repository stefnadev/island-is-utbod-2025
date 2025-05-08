'use strict';

const { DATE } = require('sequelize');
const { STRING } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        allowNull: false,
        type: STRING,
      },
      ssn: {
        allowNull: false,
        type: STRING,
      },
      address: {
        allowNull: false,
        type: STRING,
      },
      email: {
        allowNull: false,
        type: STRING,
      },
      phone: {
        allowNull: false,
        type: STRING,
      },
      createdAt: {
        allowNull: false,
        type: DATE,
      },
      updatedAt: {
        allowNull: true,
        type: DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
