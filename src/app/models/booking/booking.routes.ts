
import exprss from 'express';
import { BookingController } from './booking.controller.js';

const router = exprss.Router();

router.post('/create-booking', BookingController.CreateBookingController);

export const BookingRoutes = router;