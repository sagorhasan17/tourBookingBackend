import { model, Schema, type Types } from 'mongoose';
import type { IDestination } from './destination.interface.js';

const createDesSchema = new Schema<IDestination>({
    name: {type: String, required: true},
    destination: {type: String, required: true},
    image: {type: String, required: true},
    location: {type: String, required: true},
    createAt: {type: Date, required: true}
})

export const DesModel = model<IDestination>("Destination", createDesSchema);