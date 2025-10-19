import { model, Schema, type Types } from 'mongoose';
import type { IUser } from './user.interface.js';

const createModelSchema = new Schema<IUser>({
    userId: {type: String, required: true},
    name: {type: String, require: true},
    password: {type: String, required: true},
    phone: {type: String, require: true},
    role: {type: String, enum: ['admin', 'customer'], required: true},
    createdAt: {type: Date,},
    isDeleted: {type: Boolean, required: true}
})

export const UserModel = model<IUser>("User", createModelSchema);