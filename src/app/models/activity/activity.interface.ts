import type { Types } from 'mongoose';

export interface IActivity{
    name: String;
    description: String;
    image: String;
    createAt: Date
}