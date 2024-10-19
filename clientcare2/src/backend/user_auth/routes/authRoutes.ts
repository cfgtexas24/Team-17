import {Router} from 'express';
import {login} from "../controllers/authController"

const router = Router();

Router.post('/login', login)

export default router;