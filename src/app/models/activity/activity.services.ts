import type { IActivity } from "./activity.interface.js";
import { ActivityModel } from "./activity.model.js";


const CreateActivityService = async(payLoad: IActivity) =>{
    const activity = await ActivityModel.create(payLoad)
    return activity
}

export const ActivityService = {
    CreateActivityService
}