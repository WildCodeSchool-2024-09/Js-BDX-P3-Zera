import { useState } from "react";

export function useLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleForgotPasswordClick = () => {};

  const handleCreateAccountClick = () => {};

  return {
    email,
    password,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
    handleForgotPasswordClick,
    handleCreateAccountClick,
  };
}
