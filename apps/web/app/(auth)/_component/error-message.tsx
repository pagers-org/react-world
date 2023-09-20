interface ErrorMessageProps {
  message?: string;
}

export function ErrorMessage({ message }: ErrorMessageProps): JSX.Element {
  return (
    <ul className="error-messages">
      <li>{message}</li>
    </ul>
  );
}
