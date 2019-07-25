"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("payments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uid: {
        allowNull: true,
        type: Sequelize.STRING(255)
      },
      total: {
        allowNull: false,
        type: Sequelize.DOUBLE(11, 2)
      },
      status: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      batch_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      buyer_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      event_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("payments");
  }
};
