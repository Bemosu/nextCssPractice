"use client";

import React from "react";
interface IButtopnProps {
    type? : 'submit' | 'reset' | 'button' | undefined;
    size? : 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
    onClick? : React.MouseEventHandler<HTMLButtonElement>;
    classes? : string;
    disabled? : boolean;
    children : React.ReactNode;
}
const Button = ({ type, size, onClick, classes, disabled, children}: IButtopnProps) => {
  return (
    <button 
    type={type || 'button'}
    className={`py-2 px-4 rounded-lg border border-solid border-white cursor-pointer break-keep font-bold text-${size} ${classes}`}
    onClick={onClick}
    disabled = {disabled}>
        {children}
    </button>
  )
}

export default Button