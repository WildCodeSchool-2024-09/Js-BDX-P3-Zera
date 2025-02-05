import InputField from "../../components/form/InputField";
import type { ForgotPasswordFormProps } from "../../types/ForgotPasswordProps";
import styles from "./forgotPasswordForm.module.css";

function ForgotPasswordForm({
  email,
  onEmailChange,
  onSubmit,
}: ForgotPasswordFormProps) {
  return (
    <>
      <h1>Mot de passe oublié</h1>
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

        <button type="submit" className={styles.button}>
          Envoyer le lien de réinitialisation
        </button>
      </form>
    </>
  );
}

export default ForgotPasswordForm;
