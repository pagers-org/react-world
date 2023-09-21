interface LoginErrorMessageListProps {
  errorMessages: string[];
}

const LoginErrorMessageList = (props: LoginErrorMessageListProps) => {
  const { errorMessages } = props;

  return (
    <ul className="error-messages">
      {errorMessages.map((errorMessage, index) => (
        <li key={index}>{errorMessage}</li>
      ))}
    </ul>
  );
};

export default LoginErrorMessageList;
