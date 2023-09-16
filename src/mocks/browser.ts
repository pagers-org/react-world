import { setupWorker } from 'msw';
import { articlesHandlers } from './handlers/articlesHandlers';

export const worker = setupWorker(...articlesHandlers());
