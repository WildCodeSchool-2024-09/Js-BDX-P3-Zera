import LoginForm from "../login/logingForm";
import { useLoginForm } from "../login/useLogingForm";

function LoginPage() {
  const {
    email,
    password,
    error,
    isLoading,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  } = useLoginForm();

  return (
    <LoginForm
      email={email}
      password={password}
      error={error}
      isLoading={isLoading}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
      forgotPasswordLink="/mot-de-passe-oublie"
      createAccountLink="/inscription"
    />
  );
}

export default LoginPage;
