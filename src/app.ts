import express, { type Application } from 'express';
import dotenv from 'dotenv';
import { UserRoute } from './app/models/user/user.routes.js';
import { AuthRoute } from './app/models/auth/auth.routes.js';
import { ActivityRoute } from './app/models/activity/activity.routes.js';
import { TourRouter } from './app/models/tour/tour.routes.js';
import { DesRouter } from './app/models/destination/destination.routes.js';
import { BookingRoutes } from './app/models/booking/booking.routes.js';

dotenv.config();

const app: Application = express();

// -------------------- MIDDLEWARE --------------------
// JSON body parser --need for req.body
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// -------------------- ROUTES --------------------
app.use('/api/user', UserRoute);
app.use('/api/login', AuthRoute);
app.use('/api/auth', AuthRoute);
app.use('/api/activity', ActivityRoute);
app.use('/api/tour', TourRouter);
app.use('/api/destination', DesRouter);
app.use('/api/booking', BookingRoutes);

// -------------------- DEFAULT ROUTE --------------------
app.get('/', (req, res) => {
  res.send('This Server is properly running...');
});

// -------------------- EXPORT APP --------------------
export default app;
