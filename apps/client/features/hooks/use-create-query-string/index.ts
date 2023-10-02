import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

interface IUserCreateQueryString {
    key: string;
    value: string;
}

export default function useCreateQueryString() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
        },
        [searchParams],
    );

    return {
        moveToUrlWithoutAnchor: ({ key, value }: IUserCreateQueryString) =>
            router.push(pathname + '?' + createQueryString(key, value)),
        moveToUrlWithAnchor: ({ key, value }: IUserCreateQueryString) =>
            pathname + '?' + createQueryString(key, value),
    };
}
