import { model, Schema } from "mongoose";
import type { IActivity } from "./activity.interface.js";

const activitySchema = new Schema<IActivity>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    createAt: { type: Date, required: true }
})

export const ActivityModel = model<IActivity>("Activity", activitySchema);
