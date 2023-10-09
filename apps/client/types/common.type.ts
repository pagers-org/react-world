export interface ISearchParams {
    searchParams?: { [key: string]: string | string[] | undefined };
}

export interface IParams<T> {
    params?: T;
}

export type TReturnComponent = JSX.Element | null;
