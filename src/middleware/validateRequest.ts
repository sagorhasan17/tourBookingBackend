import type { NextFunction, Request, Response } from 'express';
import type { ZodSchema } from 'zod';

export const validateRequest =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = schema.parse(req.body);
      req.body = parsed;

      next();
    } catch (err) {
      const zodError = err as any;

      if (zodError?.issues && Array.isArray(zodError.issues)) {
        const errors = zodError.issues.map((issue: any) => ({
          path: issue.path.join('.'),
          message: issue.message,
        }));

        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors,
        });
      }
      return res.status(500).json({
        success: false,
        message: 'Internal server error during validation',
      });
    }
  };
