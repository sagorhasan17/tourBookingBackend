import type { Request, Response } from "express";
import { ActivityService } from "./activity.services.js";


const CreateActivityController = async(req: Request, res: Response) =>{
      try {
        const activity = await ActivityService.CreateActivityService(req.body)
        res.status(201).json({
          success: true,
          status: 'success',
          message: 'activity created successfully',
          data: activity,
        });
      } catch (error) {
        console.log(error);
      }
}

export const ActivityController = {
    CreateActivityController
}