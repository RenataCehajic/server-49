"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Get some fresh air",
          deadline: "today",
          important: false,
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Meditate",
          important: true,
          todoListId: 1,
          deadline: "tomorrow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Pick up Emma",
          important: true,
          todoListId: 2,
          deadline: "tomorrow",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};
