import { model, Schema } from 'mongoose';
import type { IUser } from './user.interface.js';

const createUserSchema = new Schema<IUser>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  role: { type: String, enum: ['admin', 'customer'], required: true },
  createdAt: { type: Date},
  isDeleted: { type: Boolean, required: true, default: false },
});

export const UserModel = model<IUser>('User', createUserSchema);
