import { useMutation } from '@tanstack/react-query';

import { FieldValues } from '@/app/register/page';

import { authApiService } from '@/features/auth/services/AuthApiService';
import { RegisterResponse } from '@/features/auth/types';

interface UseRegisterMutationParams {
  onSuccessCallback: () => void;
}

export default function useRegisterMutation({
  onSuccessCallback,
}: UseRegisterMutationParams) {
  return useMutation<
    RegisterResponse,
    Record<keyof FieldValues, string[]>,
    FieldValues
  >({
    mutationFn: (values: FieldValues) => authApiService.register(values),

    onSuccess() {
      onSuccessCallback();
    },
  });
}
