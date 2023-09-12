'use client';

import React from 'react';

const Form = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);
  };

  return (
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
      <button className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
    </form>
  );
};

export default Form;
