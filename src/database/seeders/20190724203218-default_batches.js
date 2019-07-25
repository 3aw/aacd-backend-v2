"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Batches",
      [
        {
          name: "Lote 1",
          value: 300,
          max: 40,
          event_id: 1
        },
        {
          name: "Lote 2",
          value: 400,
          max: 220,
          event_id: 1
        },
        {
          name: "Lote 3",
          value: 450,
          max: 220,
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
