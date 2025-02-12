"use client";

import { ComponentPropsWithoutRef, memo } from "react";
import { twMerge } from "tailwind-merge";

const Button = memo(function Button(props: ComponentPropsWithoutRef<"button">) {
  const { children, className, ...rest } = props;
  return (
    <button
      className={twMerge(
        "bg-primary-default h-10 text-white px-4 py-2 rounded-md font-bold hover:bg-primary-hover hover:text-primary-default transition-colors duration-300 cursor-pointer",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
});

export default Button;
