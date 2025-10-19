import type { Request, Response } from "express";
import { DesService } from "./destination.services.js";


const CreateDesController = async (req: Request, res: Response) => {
  try {
    const desti = await DesService.CreateDesService(req.body)
    res.status(201).json({
      success: true,
      status: 'success',
      message: 'Tour created successfully',
      data: desti,
    });
  } catch (error) {
    console.log(error);
  }
};

export const DesController = {
  CreateDesController
} 