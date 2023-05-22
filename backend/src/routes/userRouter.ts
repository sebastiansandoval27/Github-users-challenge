import { Router } from "express";

import {
    getUsers,
    createUser,
    getUser,
    deleteUser,
    updateUser
} from "../controllers/userController";

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", getUser);

userRouter.post("/", createUser);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

export default userRouter;