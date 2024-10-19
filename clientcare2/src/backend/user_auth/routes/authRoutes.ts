import {Router} from "express";
import {servePage} from "../controllers/authController"

const router = Router();  // the intialized express router object

router.get("/page/:role", servePage)  // the router will serve the page whenevr the page route with the specific role is called. The controller logic will control what to do based on role


// NOTE: for now the page route represents the page you go to after logging in as a user/admin
export default router;
