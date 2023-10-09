import { ILoginData, authApi } from '@/services/rest/auth';
import { IAuthReturnData } from '@/types/auth.type';
import { extractErrorMessages } from '@/utils/func';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

export default function useLogin() {
    const router = useRouter();
    const [errorMessages, setErrorMessages] = useState<unknown[][] | null>(
        null,
    );

    const loginRef = useRef<ILoginData['user']>({
        email: '',
        password: '',
    });

    const { mutate: loginMutate } = useMutation(authApi.login, {
        onSuccess: (res: IAuthReturnData) => {
            // TODO: token 정보 server에서 cookie로 관리
            sessionStorage.setItem('token', res.user.token);
            router.push('/');
        },
        onError: (e: any) => {
            setErrorMessages(extractErrorMessages(e.response.data.errors));
        },
    });

    const handleSignInSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const loginInfo = { user: { ...loginRef.current } };
        await loginMutate({ loginInfo });
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const key = e.target.name as keyof ILoginData['user'];
        const value = e.target.value;

        loginRef.current[key] = value;
    };
    return {
        handleInputChange,
        handleSignInSubmit,
        errorMessages: errorMessages || [],
    };
}
