import { httpClient } from '@/services/rest';
import { IAuthReturnData } from '@/types/auth.type';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

interface IRegisterData {
    user: {
        username: string;
        email: string;
        password: string;
    };
}

export default function useRegister() {
    const router = useRouter();

    const registerRef = useRef<IRegisterData['user']>({
        username: '',
        email: '',
        password: '',
    });

    const [errorMessages, setErrorMessages] = useState<unknown[][] | null>(
        null,
    );

    const handleSignUpSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const bodyData = { user: { ...registerRef.current } };

        try {
            await httpClient.post<IAuthReturnData, IRegisterData>(
                '/users',
                bodyData,
            );

            router.push('/login');
        } catch (e: any) {
            const errorMessages = Object.entries(e.response.data.errors).map(
                msg => msg.flat(),
            );

            setErrorMessages(errorMessages);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const key = e.target.name as keyof IRegisterData['user'];
        const value = e.target.value;

        registerRef.current[key] = value;
    };

    return {
        handleSignUpSubmit,
        handleInputChange,
        errorMessages: errorMessages || [],
    };
}
