import LoginForm from "./logingForm";
import { useLoginForm } from "./useLogingForm";

function LoginPage() {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  } = useLoginForm();

  return (
    <LoginForm
      email={email}
      password={password}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      onSubmit={handleSubmit}
      forgotPasswordLink="/mot-de-passe-oublie"
      createAccountLink="/inscription"
    />
  );
}

export default LoginPage;
