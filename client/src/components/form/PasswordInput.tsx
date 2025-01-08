import type React from "react";
import { useState } from "react";
import styles from "./passwordInput.module.css";

interface PasswordInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}

function PasswordInput({
  id,
  label,
  value,
  onChange,
  placeholder,
  required = false,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <h2 className={styles.label}>{label}</h2>
      <section className={styles.inputContainer}>
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          value={value}
          onChange={onChange}
          className={styles.input}
          placeholder={placeholder}
          required={required}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className={styles.toggleButton}
        >
          {showPassword ? "Cacher" : "Afficher"}
        </button>
      </section>
    </>
  );
}

export default PasswordInput;
