import type { Types } from 'mongoose';

export interface IDestination{
    name: String;
    destination: String;
    image: String;
    location: String;
    createAt: Date;
}