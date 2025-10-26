import exprss from 'express';
import { AuthController } from './auth.controller.js';
import { validateRequest } from '../../../middleware/validateRequest.js';

const router = exprss.Router();

router.post('/login', AuthController.CreateAuthController);

export const AuthRoute = router;