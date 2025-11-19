import { ImageWithFallback } from "./ImageWithFallback";

interface InsightCardProps {
  icon: string;
  title: string;
  description: string;
  decorativeImg?: string;
  variant?: "default" | "compact";
}

export function InsightCard({
  icon,
  title,
  description,
  decorativeImg,
  variant = "default",
}: InsightCardProps) {
  return (
    <div className="relative bg-white rounded-lg shadow-md p-6 pt-12 flex flex-col gap-1">
      {decorativeImg && (
        <div className="absolute left-8 -top-7 size-[66.67px]">
          <ImageWithFallback
            src={decorativeImg}
            alt=""
            className="size-full object-cover"
          />
        </div>
      )}
      <p className="text-[clamp(1rem,1.5vw,1.125rem)] leading-normal text-[var(--color-accent-teal)]">
        {icon} {title}
      </p>
      <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[var(--color-text-secondary)]">
        {description}
      </p>
    </div>
  );
}
