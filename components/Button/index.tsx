import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  theme?: 'primary' | 'neutral';
  size?: 'small' | 'medium' | 'large';
  styles?: string[];
  onClick?: () => void;
}

export const Button = ({
  theme = 'neutral',
  size = 'medium',
  styles,
  children,
  onClick,
}: ButtonProps) => {
  const themeColor = {
    primary: 'text-primary-100 border-primary-100 hover:bg-primary-10',
    neutral: 'text-neutral-100 border-neutral-100 hover:bg-neutral-10',
  };
  const fontSize = {
    small: 'text-sm',
    medium: 'text-md',
    large: 'text-lg',
  };

  return (
    <button
      type='button'
      className={`${themeColor[theme]} ${fontSize[size]} ${styles?.join(' ')} px-2 py-1 border rounded-xl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
