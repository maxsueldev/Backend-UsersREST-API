const express = require("express");
const routes = express.Router();

const UserController = require("./controller/UserController");

routes.get("/users", UserController.show);
routes.post("/users", UserController.store);
routes.post("/login", UserController.login);
routes.put("/users/:user_id", UserController.update);
routes.delete("/users/:user_id", UserController.delete);

module.exports = routes;
