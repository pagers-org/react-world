import { http } from '@/utils/http';
import { NextRequest, NextResponse } from 'next/server';

// Follow a user
async function POST(req: NextRequest, route: { params: { username: string } }) {
  const username = route.params.username;

  const token = req.cookies.get('token')?.value || '';

  try {
    const response = await http.post(`/profiles/${username}/follow`, '', {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    return NextResponse.json({ message: 'Follow Success', response });
  } catch (err) {
    return NextResponse.json({ message: 'Follow Fail', err });
  }
}

// Unfollow a user
async function DELETE(req: NextRequest, route: { params: { username: string } }) {
  const username = route.params.username;
  const token = req.cookies.get('token')?.value || '';
  try {
    const response = await http.delete(`/profiles/${username}/follow`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });

    return NextResponse.json({ message: 'Unfollow Success', response });
  } catch (err) {
    return NextResponse.json({ message: 'Unfollow Fail', err });
  }
}

export { POST, DELETE };
