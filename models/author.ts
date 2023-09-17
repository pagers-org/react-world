import { z } from 'zod';

export const AuthorSchema = z.object({
  username: z.string(),
  bio: z.string().nullable(),
  image: z.string(),
  following: z.boolean(),
});
