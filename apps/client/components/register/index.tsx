'use client';

import useRegister from '@/app/register/hooks/use-register';
import { useRef } from 'react';

export default function RegisterComponent() {
    const { handleSignUpSubmit, handleInputChange } = useRegister();

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <a href="/login">Have an account?</a>
                        </p>

                        <ul className="error-messages">
                            <li>That email is already taken</li>
                        </ul>

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
