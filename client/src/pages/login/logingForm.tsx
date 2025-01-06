interface LoginFormProps {
  email: string;
  password: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

function LoginForm({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginFormProps) {
  return (
    <form onSubmit={onSubmit} className="login-form">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={onEmailChange}
        placeholder="Entrez votre email"
        required
      />

      <label htmlFor="password">Mot de passe</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="Entrez votre mot de passe"
        required
      />

      <button type="submit">Se connecter</button>
    </form>
  );
}

export default LoginForm;
