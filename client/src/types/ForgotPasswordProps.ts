// types/forms.ts
export interface ForgotPasswordFormProps {
  email: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}
