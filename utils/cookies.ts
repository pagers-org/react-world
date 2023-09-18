import jwtDecode from 'jwt-decode';
import { NextRequest } from 'next/server';

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get('token')?.value || '';
    const decodedToken = jwtDecode(token);
    return decodedToken;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
