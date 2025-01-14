import SignupForm from "./signupForm";
import { useSignupForm } from "./useSignupForm";

export default function SignUpPage() {
  const {
    email,
    confirmEmail,
    password,
    confirmPassword,
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
      onEmailChange={handleEmailChange}
      onConfirmEmailChange={handleConfirmEmailChange}
      onPasswordChange={handlePasswordChange}
      onConfirmPasswordChange={handleConfirmPasswordChange}
      onSubmit={handleSubmit}
    />
  );
}
