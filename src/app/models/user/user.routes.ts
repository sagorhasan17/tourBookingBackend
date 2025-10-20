import express from 'express';
import { UserController } from './user.controller.js';

const router = express.Router();

router.post('/user-create', UserController.CreateUserController);

export const UserRoutes = router;
