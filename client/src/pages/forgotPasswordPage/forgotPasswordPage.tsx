import ForgotPasswordForm from "../forgotPasswordPage/forgotPasswordForm";
import { useForgotPasswordForm } from "./useForgotPasswordForm";

function ForgotPasswordPage() {
  const { email, handleEmailChange, handleSubmit } = useForgotPasswordForm();

  return (
    <main className="forgot-password-page">
      <p>
        Entrez votre adresse email pour recevoir un lien de réinitialisation.
      </p>
      <ForgotPasswordForm
        email={email}
        onEmailChange={handleEmailChange}
        onSubmit={handleSubmit}
      />
    </main>
  );
}

export default ForgotPasswordPage;
