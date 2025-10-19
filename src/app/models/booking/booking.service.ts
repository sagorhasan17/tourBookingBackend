import type { IBooking } from "./booking.interface.js";
import { BookingModel } from "./booking.model.js";

const CreateBookingService = async (payLoad: IBooking) => {
  const booking = await BookingModel.create(payLoad);
  return booking;
}

export const BookingService = {
  CreateBookingService
}