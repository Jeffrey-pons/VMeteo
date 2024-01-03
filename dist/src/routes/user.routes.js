import { Router } from "express";
import { userController } from "../controllers/user.controllers.js";
const initUserRoutes = (app, sm, jwt) => {
    const router = Router();
    router.post("/register", sm, userController.register);
    router.post("/login", sm, userController.login);
    router.delete("/delete", jwt, userController.deleteUser);
    app.use("/user", router);
};
export default initUserRoutes;