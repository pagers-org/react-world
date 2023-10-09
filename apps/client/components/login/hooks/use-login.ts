import { httpClient } from '@/services/rest';
import { IAuthReturnData } from '@/types/auth.type';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

interface ISignInData {
    user: {
        email: string;
        password: string;
    };
}

export default function useLogin() {
    const router = useRouter();

    const [errorMessages, setErrorMessages] = useState<unknown[][] | null>(
        null,
    );

    const loginRef = useRef({
        email: '',
        password: '',
    });

    const handleSignInSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const bodyData = { user: { ...loginRef.current } };

        try {
            const result = await httpClient.post<IAuthReturnData, ISignInData>(
                '/users/login',
                bodyData,
            );

            console.log('result', result);
            router.push('/');
        } catch (e: any) {
            const errorMessages = Object.entries(e.response.data.errors).map(
                msg => msg.flat(),
            );

            setErrorMessages(errorMessages);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const key = e.target.name as keyof ISignInData['user'];
        const value = e.target.value;

        loginRef.current[key] = value;
    };
    return {
        handleInputChange,
        handleSignInSubmit,
        errorMessages: errorMessages || [],
    };
}
