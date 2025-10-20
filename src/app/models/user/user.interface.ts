import { model, Schema, trusted } from 'mongoose';
export interface IUser {
  userId: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'admin' | 'customer';
  createdAt?: Date;
  isDeleted: boolean;
}
