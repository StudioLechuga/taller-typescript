// VARIABLES--------------

// import variables from "./variables";
// console.log(variables.message);

// FUNCTIONS--------------
// import {
//   setParable,
//   setUser,
//   IUser,
//   structuredPrinter,
//   functionalPrinter,
// } from "./functions";

// // console.log("result:", setParable(2));

// const users: Array<IUser> = [
//   {
//     name: "Beto",
//     age: 19,
//     isLoggedIn: true,
//     message: "Hello Beto",
//     region: "Americas",
//     id: 1,
//   },
//   {
//     name: "Jesus",
//     age: 19,
//     isLoggedIn: true,
//     message: "Hello Jesus",
//     region: "Americas",
//     id: 2,
//   },
//   {
//     name: "Kevin",
//     age: 19,
//     isLoggedIn: true,
//     message: "Hello Kevin",
//     region: "Americas",
//     id: 3,
//   },
//   {
//     name: "Sebastian",
//     age: 20,
//     isLoggedIn: true,
//     message: "Hello Sebastian",
//     region: "Americas",
//     id: 4,
//   },
// ];

// // structuredPrinter(users);
// console.log(functionalPrinter(users));

// OOP--------------
import { User } from "./OOP";

const userService = new User({
  name: "Beto",
  age: 27,
  isLoggedIn: true,
  message: "Hello Beto",
  region: "Americas",
});

console.log(userService.getUser());
