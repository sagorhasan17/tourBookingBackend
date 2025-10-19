import exprss from 'express';
import { AuthController } from './auth.controller.js';

const router = exprss.Router();

router.post('/login',AuthController.CreateAuthController);

export const AuthRoute = router;