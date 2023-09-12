"use client";

/**
 * If an error is thrown inside a Server Component, Next.js will forward an Error object
 * (stripped of sensitive error information in production) to the nearest error.js file as the error prop.
 */
interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export default function GlobalError({ error, reset }: GlobalErrorProps): JSX.Element {
  return (
    <html lang="ko">
      <body>
        <h2>Something went wrong!</h2>
        <button
          onClick={() => {
            reset();
          }}
          type="button"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
