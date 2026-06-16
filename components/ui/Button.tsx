import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'light';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}: ButtonProps) {
  const cls =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'outline'
      ? 'btn-secondary-outline'
      : 'btn-secondary-light';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${cls} ${className}`}
      style={disabled ? { opacity: 0.65, cursor: 'not-allowed', transform: 'none' } : undefined}
    >
      {children}
    </button>
  );
}
