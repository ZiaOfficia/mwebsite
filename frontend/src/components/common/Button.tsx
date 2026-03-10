import React from "react";
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  withIcon?: boolean;
  icon?: React.ElementType;
}

export const Button = ({
  className,
  variant = "primary",
  size = "md",
  withIcon = false,
  icon: Icon,
  children,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all duration-300";

  const variants = {
    primary:
      "bg-[linear-gradient(to_right,theme(colors.primary)_50%,black_50%)] bg-[length:200%_100%] bg-left hover:bg-right text-white border-none",
    outline:
      "border border-white/40 hover:bg-white hover:text-black text-white",
    text: "border-b-2 border-primary pb-1 hover:text-primary text-gray-900 dark:text-white bg-transparent px-0 py-0",
  };

  const sizes = {
    sm: "text-[10px] px-4 py-2",
    md: "text-xs px-6 py-3",
    lg: "text-xs px-8 py-4",
  };

  // Text variant shouldn't strictly follow padding sizes
  const sizeStyles = variant === "text" ? "" : sizes[size];

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizeStyles, className)}
      {...props}
    >
      {children}
      {Icon ? (
        <Icon size={16} className="ml-2" />
      ) : (
        withIcon && <ArrowRight size={16} className="ml-2" />
      )}
    </button>
  );
};
