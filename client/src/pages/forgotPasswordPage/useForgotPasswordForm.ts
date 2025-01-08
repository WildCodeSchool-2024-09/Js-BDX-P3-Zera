import { useState } from "react";

export function useForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return {
    email,
    handleEmailChange,
    handleSubmit,
  };
}
