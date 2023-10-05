import { LoginUser } from '@/types';
import { useMutation } from '@tanstack/react-query';

const useLogin = ({ onSuccess, onError }: { onSuccess: (res: any) => void; onError: (err: any) => void }) => {
  return useMutation({
    mutationFn: async (loginUser: LoginUser) =>
      await fetch('/api/auth/login', { method: 'POST', body: JSON.stringify({ ...loginUser }) }).then(res =>
        res.json()
      ),
    onError,
    onSuccess,
  });
};

export default useLogin;
