interface LoginFormProps {
  email: string;
  password: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onForgotPasswordClick: () => void;
  onCreateAccountClick: () => void;
}

function LoginForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onForgotPasswordClick,
  onCreateAccountClick,
}: LoginFormProps) {
  return (
    <form onSubmit={onSubmit} className="login-form">
      <fieldset>
        <legend>Connexion</legend>
        <label htmlFor="email" className="login-form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
          className="login-form-input"
          placeholder="Entrez votre email"
          required
        />

        <label htmlFor="password" className="login-form-label">
          Mot de passe
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          className="login-form-input"
          placeholder="Votre mot de passe"
          required
        />

        <button type="submit" className="login-form-button">
          Se connecter
        </button>
      </fieldset>

      <nav>
        <button
          type="button"
          className="forgot-password-button"
          onClick={onForgotPasswordClick}
        >
          Mot de passe oublié
        </button>
        <button
          type="button"
          className="create-account-button"
          onClick={onCreateAccountClick}
        >
          Créer un compte
        </button>
      </nav>
    </form>
  );
}

export default LoginForm;
