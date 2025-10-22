import type { Request, Response } from 'express';
import { AuthService } from './auth.service.js';

const CreateAuthController = async (req: Request, res: Response) => {
  try {
    const auth = await AuthService.CreateAuthService(req.body);
    res.status(200).json({
      message: 'Auth created successfully',
      data: auth,
      status: 'success',
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
      data: null,
      status: 'fail',
    });
  }
};

export const AuthController = {
  CreateAuthController,
};
