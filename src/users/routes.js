const {Router} = require("express");
const userRouter = Router();

const {addUser, logIn} = require("./controllers");
const {hashPass, comparePass} = require("../middleware/auth");

userRouter.post("/users/signup", hashPass, addUser);

userRouter.post("/users/login", comparePass, logIn);

module.exports = userRouter;