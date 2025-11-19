import svgPaths from "../imports/svg-l2lnvkoxyr";

interface MetricCardProps {
  value: string;
  label: string;
  showIcon?: boolean;
}

export function MetricCard({ value, label, showIcon = true }: MetricCardProps) {
  return (
    <div className="flex flex-col gap-1 px-2 py-1 rounded-lg">
      <div className="flex items-center gap-2">
        <p className="font-['Sora',_sans-serif] text-[clamp(1.25rem,2vw,1.5rem)] leading-normal tracking-[-0.5px] text-[var(--color-text-primary)]">
          {value}
        </p>
        {showIcon && (
          <div className="size-6 flex-shrink-0">
            <path
              d={svgPaths.p3d49d880}
              fill="var(--fill-0, #189E42)"
              id="Vector"
            />
          </div>
        )}
      </div>
      <p className="text-[clamp(1rem,1.5vw,1.125rem)] leading-normal tracking-[-0.5px] text-[var(--color-text-secondary)]">
        {label}
      </p>
    </div>
  );
}
