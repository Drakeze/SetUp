'use client'
imprort React from React

interface buttonProps{
  label: string;
  color?: string;
  size?: 'small'| 'medium'|'large';
  onClick: () => void;
}

const Button: React.FC<buttonProps> = ({label, onClick, color})
