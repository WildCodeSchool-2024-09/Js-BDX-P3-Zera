import type React from "react";
import styles from "./inputField.module.css";

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}

function InputField({
  id,
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false,
}: InputFieldProps) {
  return (
    <section className={styles.inputField}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
        required={required}
      />
    </section>
  );
}

export default InputField;
