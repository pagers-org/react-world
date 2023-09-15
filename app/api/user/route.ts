import { NextRequest } from 'next/server';
import { getUserAPI, updateUserAPI } from '@/services/users';

export async function GET(req: NextRequest) {
  const { value } = req.cookies.get('token');
  console.log(value);
  console.log('route user get');

  return getUserAPI(value);
}

export async function PUT(req: NextRequest) {
  const { value } = req.cookies.get('token');
  const user = await req.json();
  console.log(user);
  console.log('route user put');
  return updateUserAPI(user, value);
}
