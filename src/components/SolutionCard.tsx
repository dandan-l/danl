interface SolutionCardProps {
  title: string;
  description: string;
}

export function SolutionCard({ title, description }: SolutionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-1 min-w-[280px] flex-1">
      <p className="text-[clamp(1rem,1.5vw,1.125rem)] leading-normal text-[var(--color-accent-teal)]">
        {title}
      </p>
      <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[var(--color-text-secondary)] tracking-[-0.5px]">
        {description}
      </p>
    </div>
  );
}
