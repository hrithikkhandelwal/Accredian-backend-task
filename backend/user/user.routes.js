import express from "express";
import * as userController from "./user.controller.js";

const userRouter = express.Router();

userRouter.post("/signup", (req, res) => {
  userController.signUp(req, res);
});
userRouter.post("/signin", (req, res) => {
  userController.signIn(req, res);
});

export default userRouter;
