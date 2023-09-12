'use client';

import React from 'react';

import Form from '@/pageComponents/Form/Form';

const page = () => {
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
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
