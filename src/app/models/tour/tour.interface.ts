import type { Types } from 'mongoose';

export interface ITour {
  title: String;
  description: String;
  price: Number;
  duration: String;
  destination: Types.ObjectId;
  activities: Types.ObjectId;
  startDate: Date;
}
