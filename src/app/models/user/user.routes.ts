import express from 'express';
import { UserController } from './user.controller.js';
import { validateRequest } from '../../../middleware/validateRequest.js';
import { userValidationSchema } from './user.validation.js';

const router = express.Router();

router.post('/user-create',validateRequest(userValidationSchema),UserController.CreateUserController);

export const UserRoutes = router;
