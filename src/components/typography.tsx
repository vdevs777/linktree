import type { ComponentPropsWithoutRef, ElementType } from "react";

type TypographyProps<T extends ElementType> = {
  as?: T;
  variant?: "text-md" | "text-sm";
} & Omit<ComponentPropsWithoutRef<T>, "as">;

export function Typography<T extends ElementType = "p">({
  as,
  variant = "text-md",
  className,
  ...props
}: TypographyProps<T>) {
  const Component = as || "p";

  const variants = {
    "text-md": "text-md font-medium",
    "text-sm": "text-sm font-normal",
  };

  return (
    <Component
      className={`${variants[variant]} ${className ?? ""}`}
      {...props}
    />
  );
}
