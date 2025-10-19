import type { Types } from 'mongoose';

export interface IUser{
    userId: String;
    name: String;
    email: String;
    password: String;
    phone: String;
    role: 'admin' | 'customer';
    createdAt: Date;
    isDeleted: String;
}