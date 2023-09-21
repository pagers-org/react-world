import { z } from 'zod';

export const loginResponseSchema = z.object({
  user: z.object({
    email: z.string(),
    token: z.string(),
    username: z.string(),
    bio: z.string().nullish(),
    image: z.string(),
  }),
});

export const registerResponseSchema = loginResponseSchema;

export type LoginResponse = z.infer<typeof loginResponseSchema>;

export type RegisterResponse = z.infer<typeof registerResponseSchema>;
