type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export function SectionHeader({ eyebrow, title, children, className = "" }: SectionHeaderProps) {
  return (
    <div className={`section-header ${className}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children ? <div className="section-copy">{children}</div> : null}
    </div>
  );
}

