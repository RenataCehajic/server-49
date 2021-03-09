const User = require("./models").user;
const TodoItem = require("./models").todoItem;

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    console.log(users);
  } catch (e) {
    console.log(e.message);
  }
};

// getAllUsers();

const getAllItems = async () => {
  try {
    const items = await TodoItem.findAll();
    const cleanLog = items.map((item) => item.get({ plain: true }));
    console.log(cleanLog);
  } catch (e) {
    console.log(e.message);
  }
};

// getAllItems();

const getOneUser = async (id) => {
  try {
    const user = await User.findByPk(id);
    console.log(user.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
};

// getOneUser(2);

const signUpNewUser = async (name, email, password) => {
  try {
    const newUser = await User.create({ name, email, password });
    console.log(newUser);
  } catch (e) {
    console.log(e.message);
  }
};

signUpNewUser("Emma", "emma@gmail.com", "456");

// const signUpNewUser = async () => {
//   try {
//     const newGuy = {
//       email: "renata@gmail.com",
//       password: "123",
//       name: "Renata",
//     };

//     const newUser = await User.create(newGuy);
//     console.log(newUser);
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// signUpNewUser();

const importantItems = async () => {
  try {
    const items = await TodoItem.findAll({ where: { important: true } });
    const cleanLog = items.map((item) => item.get({ plain: true }));
    console.log(cleanLog);
  } catch (e) {
    console.log(e.message);
  }
};

// importantItems();
