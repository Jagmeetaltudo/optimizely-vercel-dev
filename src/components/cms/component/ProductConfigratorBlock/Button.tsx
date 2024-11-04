import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant }) => {
  const baseClasses = "px-8 py-7 leading-loose border border-cyan-900 border-solid max-md:px-5";
  const variantClasses = {
    primary: "text-white bg-cyan-900",
    secondary: "text-teal-950",
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </button>
  );
};

export default Button;