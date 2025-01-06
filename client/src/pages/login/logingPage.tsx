import LoginForm from "../login/logingForm";
import { useLoginForm } from "./useLogingForm";

function LoginPage() {
  const {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    handleForgotPasswordClick,
    handleCreateAccountClick,
  } = useLoginForm();

  return (
    <main className="login-page">
      <LoginForm
        email={email}
        password={password}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleSubmit}
        onForgotPasswordClick={handleForgotPasswordClick}
        onCreateAccountClick={handleCreateAccountClick}
      />
    </main>
  );
}

export default LoginPage;
