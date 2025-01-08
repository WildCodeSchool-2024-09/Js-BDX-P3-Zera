import styles from "./signupForm.module.css";
import "../../components/Variables.css";
import InputField from "../../components/form/InputField";
import PasswordInput from "../../components/form/PasswordInput";

function SignupForm({
  email,
  confirmEmail,
  password,
  confirmPassword,
  onEmailChange,
  onConfirmEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onSubmit,
}: SignupFormProps) {
  return (
    <form onSubmit={onSubmit} className={styles.signupForm}>
      <h1>Inscription</h1>

      <InputField
        id="email"
        label="Email *"
        type="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Entrez votre email"
        required
      />
      <InputField
        id="confirm-email"
        label="Confirmez votre email *"
        type="email"
        value={confirmEmail}
        onChange={onConfirmEmailChange}
        placeholder="Confirmez votre email"
        required
      />

      <PasswordInput
        id="password"
        label="Mot de passe *"
        value={password}
        onChange={onPasswordChange}
        placeholder="Entrez votre mot de passe"
        required
      />
      <PasswordInput
        id="confirm-password"
        label="Confirmez votre mot de passe *"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        placeholder="Confirmez votre mot de passe"
        required
      />
      <div className={styles.container}>
        <button type="submit" className={styles.button}>
          S'inscrire
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
