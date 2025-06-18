'use client'
import React from React

//This is the first interface props

interface inputPops{
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  type?: 'text' | 'email' | 'password' | 'number';
}  
// This where the JS variable comes 
//adding in the props to  the const 

const Input: React.FC<inputPops> = ({value, onChange, placeholder = '', disabled = false, type = 'text'}) => {

  return(
    
  )
}


