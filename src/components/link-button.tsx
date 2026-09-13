import Link from "next/link";
import { ComponentProps } from "react";
import { Typography } from "./typography";

interface LinkButtonProps extends ComponentProps<typeof Link> {}

export function LinkButton({ children, href, ...rest }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="rounded-lg bg-surface hover:bg-surface-hover border h-14
      border-stroke hover:border-text transition-colors py-4 px-6 flex items-center justify-center w-full"
      {...rest}
    >
      <Typography variant="text-md">{children}</Typography>
    </Link>
  );
}
