interface CurrentUser {
  email: string;
  token: string;
  username: string;
  bio: string | null;
  image: string | null;
}

export default CurrentUser;
