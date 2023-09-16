import { z } from 'zod';

export const tagSchema = z.string();
export const tagsSchema = z.array(z.string());

export type Tag = z.infer<typeof tagSchema>;
