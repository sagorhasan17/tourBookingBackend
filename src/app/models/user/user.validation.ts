import z from 'zod';
export const userValidationSchema = z.object({
  userId: z.string().length(6, { message: 'Id should be 6 character' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(16, { message: 'Password must be at most 16 characters long' })
    .regex(/[!@#\$%\^&\*\(\),\.\?":\{\}\[\]\|\\<>\/\-_=+;']/, {
      message: 'Password must contain at least one special character',
    })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter',
    }),
});
