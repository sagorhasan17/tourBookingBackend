import jwt from "jsonwebtoken";

import { UserModel } from '../user/user.model.js';


const CreateAuthService = async (payLoad: { userId: string; password: string }) => {

  const { userId, password } = payLoad;

  //Is user already exists?
  const user = await UserModel.findOne({ userId, isDeleted: false });

  if (!user) {
    throw new Error('User does not exist');
  }

  //IS password matched?
  if (user.password !== password) {
    throw new Error('Password is incorrect');
  }

  //JWT token generate

  const token = jwt.sign(
    {
      _id: user._id,
      userId: user.userId,
      role: user.role,
    },
    process.env.JWT_SECRET || 'default_secret',
    { expiresIn: '3d' }
  )

  //return token
  return {
    token,
    user: {
      userId: user.userId,
      role: user.role
    }
  }


}

export const AuthService = {
  CreateAuthService
}