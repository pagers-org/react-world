/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Conduit API
 * Conduit API
 * OpenAPI spec version: 1.0.0
 */
import type { Profile } from './profile';

export interface Comment {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: Profile;
}
