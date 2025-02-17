import { Link } from "react-router-dom";
import InputField from "../../components/form/InputField";
import PasswordInput from "../../components/form/PasswordInput";
import styles from "./loginForm.module.css";

function LoginForm({
  email,
  password,
  error,
  isLoading,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  forgotPasswordLink,
  createAccountLink,
}: LoginFormProps) {
  return (
    <article className={styles.card}>
      <h1>Connexion</h1>
      <form onSubmit={onSubmit} className={styles.formContent}>
        {error && <div className={styles.error}>{error}</div>}
        <InputField
          id="email"
          value={email}
          onChange={onEmailChange}
          label="Email *"
          type="email"
          placeholder="Entrez votre email"
          required
        />
        <PasswordInput
          id="password"
          value={password}
          onChange={onPasswordChange}
          label="Mot de passe *"
          placeholder="Entrez votre mot de passe"
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Connexion en cours..." : "Se connecter"}
        </button>
        <nav className={styles.formNav}>
          <Link to={forgotPasswordLink} className={styles.link}>
            Mot de passe oublié
          </Link>
          <Link to={createAccountLink} className={styles.link}>
            Créer un compte
          </Link>
        </nav>
      </form>
    </article>
  );
}

export default LoginForm;
