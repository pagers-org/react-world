import { httpClient } from '@/services/rest';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useRef } from 'react';

interface IRegisterData {
    user: {
        username: string;
        email: string;
        password: string;
    };
}

interface IRegisterReturnData {
    user: {
        email: 'string';
        token: 'string';
        username: 'string';
        bio: 'string';
        image: 'string';
    };
}

export default function useRegister() {
    const router = useRouter();

    const registerRef = useRef<IRegisterData['user']>({
        username: '',
        email: '',
        password: '',
    });

    const handleSignUpSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const bodyData = { user: { ...registerRef.current } };

        try {
            await httpClient.post<IRegisterReturnData, IRegisterData>(
                '/users',
                bodyData,
            );

            router.push('/login');
        } catch (e) {
            alert('Error Occured');
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
    };
}
