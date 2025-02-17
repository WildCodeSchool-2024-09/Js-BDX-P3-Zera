import SignupForm from "../signupForm/signupForm";
import { useSignupForm } from "../signupForm/useSignupForm";

function SignupPage() {
  const {
    email,
    confirmEmail,
    password,
    confirmPassword,
    error,
    isLoading,
    handleEmailChange,
    handleConfirmEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
  } = useSignupForm();

  return (
    <SignupForm
      email={email}
      confirmEmail={confirmEmail}
      password={password}
      confirmPassword={confirmPassword}
      error={error}
      isLoading={isLoading}
      onEmailChange={handleEmailChange}
      onConfirmEmailChange={handleConfirmEmailChange}
      onPasswordChange={handlePasswordChange}
      onConfirmPasswordChange={handleConfirmPasswordChange}
      onSubmit={handleSubmit}
    />
  );
}

export default SignupPage;
