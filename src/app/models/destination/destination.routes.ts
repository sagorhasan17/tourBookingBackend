
import express from 'express';
import { DesController } from './destination.controller.js';

const router = express.Router();

router.post('/create-destination', DesController.CreateDesController);

export const DesRouter = router;