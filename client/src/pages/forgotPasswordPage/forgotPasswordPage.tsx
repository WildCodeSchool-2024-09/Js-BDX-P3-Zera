import ForgotPasswordForm from "../forgotPasswordPage/forgotPasswordForm";
import styles from "./forgotPasswordForm.module.css";
import { useForgotPasswordForm } from "./useForgotPasswordForm.ts";

function ForgotPasswordPage() {
  const { email, handleEmailChange, handleSubmit } = useForgotPasswordForm();

  return (
    <>
      <p className={styles.forgotText}>
        Entrez votre adresse email pour recevoir un lien de réinitialisation.
      </p>
      <ForgotPasswordForm
        email={email}
        onEmailChange={handleEmailChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default ForgotPasswordPage;
