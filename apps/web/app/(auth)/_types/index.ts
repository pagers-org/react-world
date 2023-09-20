import { z } from "zod";

export interface RegisterReq {
  username: string;
  email: string;
  password: string;
}

export const UserErrorsSchema = z.object({
  errors: z.object({
    email: z.array(z.string()),
    username: z.array(z.string()),
  }),
});

export const UserSchema = z.object({
  user: z.object({
    email: z.string(),
    token: z.string(),
    username: z.string(),
    bio: z.string(),
    image: z.string(),
  }),
});

export type UserErrorType = z.infer<typeof UserErrorsSchema>;

export type UserType = z.infer<typeof UserSchema>;
