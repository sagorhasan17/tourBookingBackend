
import express from 'express';
import { TourController } from './tour.controller.js';

const router = express.Router();

router.post('/create-tour', TourController.CreateTourController);

export const TourRouter = router;