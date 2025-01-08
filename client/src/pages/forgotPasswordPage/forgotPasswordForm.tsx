import styles from "./forgotPasswordForm.module.css";
import "../../components/Variables.css";
import InputField from "../../components/form/InputField";
import type { ForgotPasswordFormProps } from "../../types/ForgotPasswordProps";

function ForgotPasswordForm({
  email,
  onEmailChange,
  onSubmit,
}: ForgotPasswordFormProps) {
  return (
    <form onSubmit={onSubmit} className={styles.forgotPasswordForm}>
      <h1>Mot de passe oublié</h1>

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
  );
}

export default ForgotPasswordForm;
