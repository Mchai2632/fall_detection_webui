import React, { CSSProperties } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ type = "text", style, ...props }) => {
  const defaultStyle: CSSProperties = {};

  return <input {...props} type={type} style={{ ...defaultStyle, ...style }} />;
};

export default Input;
