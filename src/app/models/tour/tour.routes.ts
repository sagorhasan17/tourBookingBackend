
import express from 'express';
import { TourController } from './tour.controller.js';

const router = express.Router();

router.post('/create-tour', TourController.CreateTourController);
router.get('/', TourController.GetTourController);

export const TourRouter = router;