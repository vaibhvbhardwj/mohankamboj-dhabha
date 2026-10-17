import Link from "@/components/AppLink";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function LinkButton({ href, children, variant = "primary", external, className = "", onClick }: LinkButtonProps) {
  const classes = `button button-${variant} ${className}`.trim();
  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link className={classes} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}

