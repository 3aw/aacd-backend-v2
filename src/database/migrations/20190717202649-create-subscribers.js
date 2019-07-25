"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("subscribers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      rg: {
        allowNull: false,
        type: Sequelize.STRING(255)
      }, //rg
      value: {
        allowNull: false,
        type: Sequelize.STRING(255)
      }, //value
      event_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      }, //event_id
      buyer_id: {
        allowNull: false,
        type: Sequelize.STRING(255)
      }, //buyer_id
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
    return queryInterface.dropTable("subscribers");
  }
};
