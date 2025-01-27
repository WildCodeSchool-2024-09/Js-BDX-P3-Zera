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
    <>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className={styles.inputField}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
}

export default InputField;
