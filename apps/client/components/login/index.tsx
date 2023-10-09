'use client';

import Link from 'next/link';
import useLogin from './hooks/use-login';

export default function LoginComponent() {
    const { handleInputChange, handleSignInSubmit, errorMessages } = useLogin();

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign in</h1>
                        <p className="text-xs-center">
                            <Link href="/register">Need an account?</Link>
                        </p>
                        {errorMessages.map(msg => (
                            <ul
                                key={JSON.stringify(msg)}
                                className="error-messages"
                            >
                                <li>{msg.join(' ')}</li>
                            </ul>
                        ))}
                        <form onSubmit={handleSignInSubmit}>
                            <fieldset className="form-group">
                                <input
                                    onChange={handleInputChange}
                                    className="form-control form-control-lg"
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                />
                            </fieldset>
                            <fieldset className="form-group">
                                <input
                                    onChange={handleInputChange}
                                    className="form-control form-control-lg"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                />
                            </fieldset>
                            <button className="btn btn-lg btn-primary pull-xs-right">
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
