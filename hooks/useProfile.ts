import { useMutation, useQuery } from '@tanstack/react-query';

const useProfile = ({
  username,
  onSuccess,
  onError,
}: {
  username?: string;
  onSuccess?: (res: any) => void;
  onError?: (err: any) => void;
}) => {
  const { data: profile } = useQuery({
    queryKey: ['profile', username],
    queryFn: () => fetch(`/api/profiles/${username}`, { method: 'GET' }).then(res => res.json()),
    enabled: !!username,
    select: res => res.response.profile,
  });

  const { mutate: follow } = useMutation({
    mutationFn: async (username: string) => {
      return fetch(`/api/profiles/${username}`, { method: 'POST' }).then(res => res.json());
    },
    onSuccess,
    onError,
  });

  const { mutate: unFollow } = useMutation({
    mutationFn: async (username: string) => {
      return fetch(`/api/profiles/${username}`, { method: 'DELETE' }).then(res => res.json());
    },
    onSuccess,
    onError,
  });

  return { profile, follow, unFollow };
};

export default useProfile;
