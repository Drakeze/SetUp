'use client'
imprort React from React

interface buttonProps{
  label: string;
  color?: 'accent'| 'red'| 'green';
  size?: 'small'| 'medium'|'large';
  onClick: () => void;
  disabled?: boolean; 
}

const Button: React.FC<buttonProps> = ({label, onClick, color ='accent', size = 'medium'}) =>{
  
  const sizeClasses =
    size === 'small'
      ? 'px-3 py-2 text-sm'
      : size === 'large'
      ? 'px-6 py-3 text-lg'
      : 'px-4 py-2 text-base';
}

  const variantClasses = {
    accent: 'bg-blue-900 hover:bg-blue-800',
    green: 'bg-green-500 hover:bg-green-600',
    red: 'bg-red-500 hover:bg-red-600',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variantClasses[variant]}
        ${sizeClasses}
        text-white rounded transition duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {label}
    </button>
  );
};

export default Button;
  
