'use client'
impport React from React

// First set of props and using a interface we have a set color amount 
interface checkBox{
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  color?; 'green'| 'red':
}

const Checkbox: React.FC<checkBox> = ({ checked, onChange, label, disabled = false, color = 'green' }) =>{
  const accentColor = color === 'red' ? 'accent-red-500' : 'accent-green-500';
}
// set everything and did colors (green and red and accent color )
  return(
    <label className="flex items-center gap-2 cursor-pointer text-white">
      <input
      //These are the props and connecting to the interface props above
        type = "checked"
        checked = {checked}
       onChange={(e) => onChange(e.target.checked)}
       disabled={disabled}
       // {accentColor} is a JavaScript variable from props that holds the color (green or red) 
    className={`w-4 h-4 ${accentColor} cursor-pointer`}
  />
  {label && <span className="text-blue-900">{label}</span>}
</label>

