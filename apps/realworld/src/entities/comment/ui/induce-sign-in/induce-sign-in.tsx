import Link from 'next/link';
import React from 'react';

const InduceSignIn = () => {
  return (
    <p className="text-[1rem] ml-16">
      <Link className="hover:underline hover:text-green700 text-green600" href="/sign-in">
        Sign in
      </Link>{' '}
      or{` `}
      <Link className="hover:underline hover:text-green700 text-green600" href="/sign-up">
        sign up
      </Link>{' '}
      to add comments on this article.
    </p>
  );
};

export default InduceSignIn;
