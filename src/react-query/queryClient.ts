import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      onError: (error: unknown) =>
        error instanceof Error ? error.message : 'error connecting to server',
    },
  },
});
