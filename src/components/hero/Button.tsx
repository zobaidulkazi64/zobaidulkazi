// components/Button.tsx
import React from "react";
import Link from "next/link";

interface ButtonProps {
  name: string;
  link?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  name,
  link,
  className,
  onClick,
  type = "button",
  disabled = false,
}) => {
  const buttonClasses = `inline-flex items-center justify-center rounded-md px-4 py-2 text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ${className}`;

  const renderButton = () => (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {name}
    </button>
  );

  if (link) {
    return (
      <Link href={link}>
        <p className={buttonClasses}>{name}</p>
      </Link>
    );
  }

  return renderButton();
};

export default Button;
