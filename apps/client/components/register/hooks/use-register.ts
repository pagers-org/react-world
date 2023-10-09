import { IRegisterData, authApi } from '@/services/rest/auth';
import { extractErrorMessages } from '@/utils/func';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

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

    const { mutate: registerMutate } = useMutation(authApi.register, {
        onSuccess: () => router.push('/login'),
        onError: (e: any) => {
            setErrorMessages(extractErrorMessages(e.response.data.errors));
        },
    });

    const handleSignUpSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const registerInfo = { user: { ...registerRef.current } };
        await registerMutate({ registerInfo });
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
