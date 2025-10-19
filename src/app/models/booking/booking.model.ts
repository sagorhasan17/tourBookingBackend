import { model, Schema } from 'mongoose';
import type { IBooking } from './booking.interface.js';

const bookingSchema = new Schema<IBooking>({
  user: { type: Schema.Types.ObjectId, ref:'User', required: true }, //type always t is small letter
  tour: { type: Schema.Types.ObjectId, ref:'Tour', required: true },
  nidNumber: { type: String, required: true },
  bookingDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    required: true,
  },
});

export const BookingModel = model<IBooking>('Booking', bookingSchema);
