import type { Request, Response } from "express";
import { UserService } from "./user.services.js";

const CreateUserController = async (req: Request, res: Response) => {
  try {
    const user = await UserService.CreateUserService(req.body);
    res.status(201).json({
      success: true,
      massage: "User created successfully",
      data: user
    });
  } catch (error) {
    console.log(error)
  }
}

export const UserController = {
  CreateUserController
}