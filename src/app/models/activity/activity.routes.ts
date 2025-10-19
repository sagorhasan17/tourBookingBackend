
import express from 'express';
import { ActivityController } from './activity.controller.js';

const router = express.Router();

router.post('/create-activity',ActivityController.CreateActivityController);

export const ActivityRoute = router;