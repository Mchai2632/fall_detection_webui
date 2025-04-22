import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  ...props
}) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
