"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Events",
      [
        {
          name: "AACD"
        }
      ],
      {}
    );
  },
  down: queryInterface => {
    return queryInterface.bulkDelete("Events", null, {});
  }
};
