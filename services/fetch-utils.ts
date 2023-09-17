import { z } from 'zod';

function getHeaders(accessToken: string | undefined) {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken || ''}`,
  };
}

export const get = async <T extends z.ZodTypeAny>(
  path: string,
  schema: T,
  accessToken?: string,
): Promise<z.infer<T>> => {
  const response = await fetch(`${process.env.BACKEND_URL}${path}`, {
    method: 'GET',
    headers: getHeaders(accessToken),
  });

  if (!response.ok) {
    throw new Error('Request failed');
  }

  return schema.parse(await response.json());
};

export const post = async <T extends z.ZodTypeAny>(
  path: string,
  schema: T,
  body: unknown,
  accessToken?: string,
): Promise<z.infer<T>> => {
  const response = await fetch(`${process.env.BACKEND_URL}${path}`, {
    body: JSON.stringify(body),
    method: 'POST',
    headers: getHeaders(accessToken),
  });

  if (!response.ok) {
    throw new Error('Request failed');
  }

  return schema.parse(await response.json());
};

export const put = async <T extends z.ZodTypeAny>(
  path: string,
  schema: T,
  body: unknown,
  accessToken?: string,
): Promise<z.infer<T>> => {
  const response = await fetch(`${process.env.BACKEND_URL}${path}`, {
    body: JSON.stringify(body),
    method: 'PUT',
    headers: getHeaders(accessToken),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return schema.parse(await response.json());
};

export const delete_ = async <T extends z.ZodTypeAny>(
  path: string,
  schema: T,
  body: unknown,
  accessToken?: string,
): Promise<z.infer<T>> => {
  const response = await fetch(`${process.env.BACKEND_URL}${path}`, {
    body: JSON.stringify(body),
    method: 'DELETE',
    headers: getHeaders(accessToken),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return schema.parse(await response.json());
};
