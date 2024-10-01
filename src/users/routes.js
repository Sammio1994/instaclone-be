const {Router} = require("express");
const userRouter = Router();

const {addUser } = require("./controllers");
const {hashPass} = require("../middleware/auth");

userRouter.post("/users/signup", hashPass, addUser);

module.exports = userRouter;