import {
  getGetCurrentUserQueryKey,
  useGetCurrentUser,
} from '@/shared/api/realworld/endpoints/user-and-authentication/user-and-authentication';

const useGetUser = () => {
  const { data: user, isError: isLoginError } = useGetCurrentUser({
    query: {
      staleTime: Infinity,
      queryKey: getGetUserQueryKey(),
      select: data => {
        return data.user;
      },
    },
  });
  const isLogin = Boolean(user && !isLoginError);

  if (isLogin) {
    return {
      isLogin,
      user: user!,
    };
  }

  return {
    isLogin,
    user: null,
  };
};

export default useGetUser;

export const getGetUserQueryKey = () => {
  return [...getGetCurrentUserQueryKey(), 'useGetUser'];
};
