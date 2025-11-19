interface InfoCardProps {
  icon: string;
  title: string;
  content: React.ReactNode;
  variant?: "default" | "compact";
}

export function InfoCard({
  icon,
  title,
  content,
  variant = "default",
}: InfoCardProps) {
  return (
    <div className="bg-white rounded-lg border border-white p-4 flex flex-col gap-1">
      <p className="capitalize font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] leading-normal tracking-[-0.5px] text-[var(--color-text-primary)]">
        {icon} {title}
      </p>
      <div className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-normal text-[var(--color-text-secondary)]">
        {content}
      </div>
    </div>
  );
}
