import { Router } from "express";
import AuthenticatedUserController from "./controller/AuthenticateUserController";
import CreateMessageController from "./controller/CreateMessageController";
import { GetLast3MessagesController } from "./controller/GetLast3MessagesController";
import { ProfileUseController } from "./controller/ProfileUseController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticatedUserController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle)

router.get("/messages/last3", new GetLast3MessagesController().handle)

router.get('/profile', ensureAuthenticated, new ProfileUseController().handle)

export default router;