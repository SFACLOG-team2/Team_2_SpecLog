import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  color?: 'primary' | 'neutral';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color = 'primary',
  size = 'large',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const labelColor = {
    primary: 'text-primary-100',
    neutral: 'text-neutral-100',
  };
  const labelSize = {
    small: 'text-sm',
    medium: 'text-md',
    large: 'text-lg',
  };

  return (
    <button
      type='button'
      className={`${labelColor[color]} ${labelSize[size]}`}
      {...props}
    >
      {label}
    </button>
  );
};
