'use client';

import React from 'react';

const page = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              <p className="text-xs-center">
                <a href="/register">Need an account?</a>
              </p>

              <ul className="error-messages">
                <li>That email is already taken</li>
              </ul>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <button className="btn btn-lg btn-primary pull-xs-right">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
