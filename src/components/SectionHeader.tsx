interface SectionHeaderProps {
  emoji?: string;
  subtitle?: string;
  title: string;
  variant?: "primary" | "accent";
}

export function SectionHeader({
  emoji,
  subtitle,
  title,
  variant = "primary",
}: SectionHeaderProps) {
  const titleColor =
    variant === "accent"
      ? "text-[var(--color-accent-teal)]"
      : "text-[var(--color-text-primary)]";

  return (
    <div className="flex flex-col gap-2">
      {(emoji || subtitle) && (
        <p className="text-[clamp(1rem,1.5vw,1.125rem)] text-[var(--color-text-secondary)]">
          {emoji && <span>{emoji} </span>}
          {subtitle}
        </p>
      )}
      <h2
        className={`font-['Sora',_sans-serif] text-[clamp(1.5rem,3vw,2rem)] leading-normal tracking-[-0.5px] ${titleColor}`}
      >
        {title}
      </h2>
    </div>
  );
}
