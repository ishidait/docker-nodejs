'use strict';

const db = require('../models/');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'tasks',
      [
        {
          task: 'Write the blog article',
          done: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: 'Purchase new laptop PC',
          done: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: 'Go to swim',
          done: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: 'Order a pizza',
          done: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
