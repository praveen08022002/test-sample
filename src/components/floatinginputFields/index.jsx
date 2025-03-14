import React, { useState } from "react";
import FloatingPlaceholder from "./floatingplaceolder";

const FloatingLabelInput = ({
  label,
  type = "text",
  value,
  onChange,
  id,
  name,
  required = false,
  className = "",
  placeholder = "",
  error = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    if (e.target.value === "") {
      setIsFocused(false);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const actualType = type === "password" && showPassword ? "text" : type;

  const baseClasses = `block w-full px-3 py-[14px] text-[14px] shadow-sm rounded border-[1px] focus:outline-none  ${
    error ? "border-red-500" : "border-[#DADBE5]"
  } text-[#231F20] caret-[#022B50] ${
    error
      ? "border-red-500"
      : isFocused
      ? "border-[#DADBE5]"
      : "border-[#DADBE5]"
  } `;

  return (
    <div className="relative w-full">
      <FloatingPlaceholder isFocused={isFocused} hasError={!!error}>
        <span
          style={{ fontSize: isFocused ? "11px" : "13px" }}
          className={`${error ? "text-red-500" : "text-[#808082]"}`}
        >
          {label}
        </span>
      </FloatingPlaceholder>
      <input
        id={id}
        type={actualType}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        // required={required}
        className={`${baseClasses}  ${className}`}
        placeholder={isFocused ? placeholder : ""}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7A9.97 9.97 0 014.02 8.971m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default FloatingLabelInput;
