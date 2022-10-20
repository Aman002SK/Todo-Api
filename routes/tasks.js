const { Router } = require("express");
const express = require("express");
const routes = express.Router();

const {
  getAllTodos,
  createTodo,
  getTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/tasks");

routes.route("/").get(getAllTodos).post(createTodo);
routes.route("/:id").get(getTodo).patch(updateTodo).delete(deleteTodo);

module.exports = routes;
