"use client";

import { ButtonHTMLAttributes } from "react";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function PrimaryButton({
  children,
  className = "",
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={`
        inline-flex
        items-center
        gap-3
        rounded-full
        bg-[#A44E4B]
        px-8
        py-4
        text-white
        font-medium
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-[#8F423F]
        hover:shadow-xl
        ${className}
      `}
    >
      {children}
    </button>
  );
}