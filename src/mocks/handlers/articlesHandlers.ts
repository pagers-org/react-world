import { rest } from 'msw';
import { articles } from '../data/article';

export const articlesHandlers = () => {
  return [rest.get('/articles', getProducts)];
};

const getProducts: Parameters<typeof rest.get>[1] = (req, res, ctx) => {
  return res(
    ctx.delay(500),
    ctx.status(200),
    ctx.status(200),
    ctx.json([...articles]),
  );
};
