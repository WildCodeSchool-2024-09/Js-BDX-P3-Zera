import ForgotPasswordForm from "../forgotPasswordPage/forgotPasswordForm";
import { useForgotPasswordForm } from "./useForgotPasswordForm";

function ForgotPasswordPage() {
  const { email, handleEmailChange, handleSubmit } = useForgotPasswordForm();

  return (
    <>
      <ForgotPasswordForm
        email={email}
        onEmailChange={handleEmailChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default ForgotPasswordPage;
