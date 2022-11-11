const express = require("express");
const usersController = require("../controllers/users.controller");

const usersRouter = express.Router();

usersRouter.post("/auth/login", usersController.loginUser);

module.exports = usersRouter;
