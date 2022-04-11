'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Uma longa jornada',
        author: 'Nickolas Sparks',
        pageQuantity: 200,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Querido John',
        author: 'Nickolas Sparks',
        pageQuantity: 200,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Um amor pra recordar',
        author: 'Nickolas Sparks',
        pageQuantity: 200,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Diario de uma paixão',
        author: 'Nickolas Sparks',
        pageQuantity: 200,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Um homem de sorte',
        author: 'Nickolas Sparks',
        pageQuantity: 200,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bullDelete('Books', null, {})
  }
};
