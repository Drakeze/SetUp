'use client'
impport React from React

interface checkBox{
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

const Checkbox: React.FC<checkBox> = ({ checked, onChange, label, disabled = false }
