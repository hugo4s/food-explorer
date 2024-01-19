const { Router } = require("express")

const usersRoutes = Router();

const UsersController = require("../controllers/usersController.js")
const usersController = new UsersController();

usersRoutes.post("/", usersController.create)
usersRoutes.put("/:id", usersController.update)

module.exports = usersRoutes;   