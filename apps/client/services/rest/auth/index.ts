import { IAuthReturnData } from '@/types/auth.type';
import { httpClient } from '..';
export interface ILoginData {
    user: {
        email: string;
        password: string;
    };
}

export interface IRegisterData {
    user: {
        username: string;
        email: string;
        password: string;
    };
}

export const authApi = {
    register: ({ registerInfo }: { registerInfo: IRegisterData }) =>
        httpClient.post<IAuthReturnData, IRegisterData>('/users', registerInfo),
    login: ({ loginInfo }: { loginInfo: ILoginData }) =>
        httpClient.post<IAuthReturnData, ILoginData>('/users/login', loginInfo),
};
