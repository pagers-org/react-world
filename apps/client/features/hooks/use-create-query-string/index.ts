import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

interface ICreateQueryString {
    key: string;
    value: string;
}

interface IPathName {
    pathName: string;
}

export default function useCustomNavigate() {
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
        moveToUrlWithoutAnchor: ({ key, value }: ICreateQueryString) =>
            router.push(pathname + '?' + createQueryString(key, value)),
        moveToUrlWithAnchor: ({ key, value }: ICreateQueryString) =>
            pathname + '?' + createQueryString(key, value),
        moveToUrlWithoutQuery: ({ pathName }: IPathName) =>
            router.push(pathName),
    };
}
