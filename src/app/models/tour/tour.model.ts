import { model, Schema, Types } from 'mongoose';
import type { ITour } from './tour.interface.js';

const tourSchema = new Schema<ITour>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  destination: {
    type: Schema.Types.ObjectId,
    ref: 'Destination',
    required: true,
  },
  activities: { type: Schema.Types.ObjectId, ref: 'Activity', required: true },
  startDate: { type: Date },
});

export const TourModel = model<ITour>('Tour', tourSchema);
