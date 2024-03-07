import Image from 'next/image';
import React from 'react'

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string; // optional (add a '?')
    variant: string;
    fullScreenWidth?: boolean;  // optional (add a '?')
}

export default function Button({type, title, icon, variant, fullScreenWidth}: ButtonProps) {
  return (
    <button type={type}  className={`flexCenter gap-3 rounded-full border ${variant} ${fullScreenWidth && "w-full"} `}>
        {icon && <Image src={icon} alt="icon" width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}
