import { Component, ErrorInfo, ReactNode } from 'react';

interface IErrorBoundaryProps {
    children: ReactNode;
    fallback: ReactNode;
}

interface IState {
    hasError: boolean;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IState> {
    public state: IState = {
        hasError: false,
    };

    public static getDerivedStateFromError(_: Error): IState {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Error Boundary :', error, errorInfo);
    }

    public render(): ReactNode {
        if (this.state.hasError) {
            return this.props.fallback;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
