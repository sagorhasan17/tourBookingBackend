import type { Request, Response } from "express";
import { TourService } from "./tour.services.js";


const CreateTourController = async (req: Request, res: Response) => {
  try {
    const tour = await TourService.CreateTourService(req.body)
    res.status(201).json({
      success: true,
      status: 'success',
      message: 'Tour created successfully',
      data: tour,
    });
  } catch (error) {
    console.log(error);
  }
};

export const TourController = {
  CreateTourController
} 