'use client';

import Link from 'next/link';
import useRegister from './hooks/use-register';

export default function RegisterComponent() {
    const { handleSignUpSubmit, handleInputChange, errorMessages } =
        useRegister();

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <Link href="/login">Have an account?</Link>
                        </p>
                        {errorMessages.map(msg => (
                            <ul
                                key={JSON.stringify(msg)}
                                className="error-messages"
                            >
                                <li>{msg.join(' ')}</li>
                            </ul>
                        ))}
                        <form onSubmit={handleSignUpSubmit}>
                            <fieldset className="form-group">
                                <input
                                    onChange={handleInputChange}
                                    className="form-control form-control-lg"
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                />
                            </fieldset>
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
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                            </fieldset>
                            <button className="btn btn-lg btn-primary pull-xs-right">
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
