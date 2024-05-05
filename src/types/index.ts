import z from 'zod';

export const PasswordFormData = z.object({
  category: z.string(),
  name: z.string(),
  user: z.string(),
  url: z.string(),
  password: z.string(),
})

export type PasswordFormData = z.infer<typeof PasswordFormData>;


export const UserSchema = z.object({
  id: z.number(), // 
  username: z.string().min(3),
  fullname: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  password_confirmation: z.string().min(8),
})

export type User = z.infer<typeof UserSchema>;
export type UserLoginForm = Pick<User, 'password' | "email" >;

export type UserRegisterForm = Omit<User, 'id'>;


