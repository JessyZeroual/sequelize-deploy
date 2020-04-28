'use strict';

const items = [
  {
    id: 'TEST-1234',
    name: 'Test',
  },
  {
    id: 'MOCK-5678',
    name: 'Mock',
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', items, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(
      'Items',
      {
        id: { [Sequelize.Op.in]: items.map((item) => item.id) },
      },
      {}
    );
  },
};
