import { AuthorType } from '@/types/article';
import { useState } from 'react';

import { followUser, unFollowUser } from '@/api/profiles';

const useUserFollow = (user: { following: boolean; name: string }) => {
  const [response, setResponse] = useState<undefined | AuthorType>();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleUserFollow = async () => {
    if (user.following) {
      try {
        const response = await unFollowUser(user.name);
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        return response.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    } else {
      try {
        const response = await followUser(user.name);
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        return response.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  };

  const handleSetFollow = async () => {
    try {
      setIsLoading(true);
      setIsSuccess(false);
      setIsError(false);
      const data: AuthorType = await handleUserFollow();
      setIsLoading(false);
      setIsSuccess(true);
      setResponse(data);
    } catch (error) {
      setIsError(true);
    }
  };
  return { handleSetFollow, response, isLoading, isError, isSuccess };
};

export default useUserFollow;
