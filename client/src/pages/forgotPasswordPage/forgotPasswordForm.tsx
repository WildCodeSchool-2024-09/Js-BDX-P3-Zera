import styles from "./forgotPasswordForm.module.css";
import "../../styles/Variables.css";
import InputField from "../../components/form/InputField";
import type { ForgotPasswordFormProps } from "../../types/ForgotPasswordProps";

function ForgotPasswordForm({
  email,
  onEmailChange,
  onSubmit,
}: ForgotPasswordFormProps) {
  return (
    <>
      <h1 className={styles.forgotPasswordTitle}>Mot de passe oublié</h1>
      <form onSubmit={onSubmit} className={styles.forgotPasswordForm}>
        <InputField
          id="email"
          label="Email *"
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="Entrez votre email"
          required
        />

        <button type="submit" className={styles.forgotPasswordFormButton}>
          Envoyer le lien de réinitialisation
        </button>
      </form>
    </>
  );
}

export default ForgotPasswordForm;
