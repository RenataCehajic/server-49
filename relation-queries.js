const { user, todoItem, todoList } = require("./models");

async function listsWithUsers() {
  const lists = await todoList.findAll({
    include: [{ model: user, attributes: ["name"] }],
  });

  return lists.map((list) => list.toJSON());
}

// listsWithUsers().then((lists) => console.log(lists));

async function getUsers() {
  const allUsers = await user.findAll({
    include: { model: todoList, attributes: ["name"] },
  });
  return allUsers.map((user) => user.toJSON());
}

// getUsers().then((users) => console.log(users));
// getUsers().then((users) => console.log(users[0].todoLists));

const getUserWithLists = async (id) => {
  try {
    const specificUser = await user.findByPk(id, { include: [todoList] });
    console.log(specificUser.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
};

// getUserWithLists(1);

const importantTodos = async () => {
  try {
    const todos = await todoItem.findAll({
      where: { important: true },
      include: { model: todoList, attributes: ["name"] },
    });
    console.log(todos.map((item) => item.get({ plain: true })));
  } catch (e) {
    console.log(e.message);
  }
};

importantTodos();

async function imporantTodos() {
  const todos = await todoItem.findAll({
    where: { important: true },
    include: { model: todoList, attributes: ["name"] },
  });
  return todos.map((item) => item.get({ plain: true }));
}

// imporantTodos().then((items) => console.log("important todoItems", items));

async function fullUserById(id) {
  const result = await user.findByPk(id, {
    include: [
      {
        model: todoList,
        attributes: ["name"],
        include: { model: todoItem, attributes: ["task"] },
      },
    ],
  });
  return result.get({ plain: true });
}

// fullUserById(1).then((user) => console.log("User with tasks", user));
