"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Batches",
      [
        {
          name: "Lote 1",
          value: 2.5,
          max: 40,
          event_id: 1
        },
        {
          name: "Lote 2",
          value: 2.5,
          max: 40,
          event_id: 1
        }
      ],
      {}
    );
  },
  down: queryInterface => {
    return queryInterface.bulkDelete("Batches", null, {});
  }
};
