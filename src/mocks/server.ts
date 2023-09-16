import { setupServer } from 'msw/node';
import { articlesHandlers } from './handlers/articlesHandlers';

const server = setupServer(...articlesHandlers());

export { server };
