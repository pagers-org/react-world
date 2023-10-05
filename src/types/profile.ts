interface ProfileResponseType {
  profile: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

export type { ProfileResponseType };
