import { ImageWithFallback } from "./ImageWithFallback";

interface PersonaCardProps {
  name: string;
  role: string;
  imageUrl: string;
  traits: string[];
  label: string;
}

export function PersonaCard({
  name,
  role,
  imageUrl,
  traits,
  label,
}: PersonaCardProps) {
  return (
    <div className="flex flex-col gap-6 items-center w-full md:w-auto">
      <div className="relative bg-white rounded-lg shadow-md p-6 pt-12 flex flex-col gap-1 w-full max-w-md">
        <div className="absolute left-8 -top-9 h-[76px] w-[68px]">
          <ImageWithFallback
            src={imageUrl}
            alt={name}
            className="size-full object-contain"
          />
        </div>
        <p className="font-['Sora',_sans-serif] text-[clamp(1rem,1.5vw,1.125rem)] leading-7 tracking-[-0.2px] text-[var(--color-text-primary)]">
          {name}
        </p>
        <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-5 tracking-[-0.1px] text-[var(--color-accent-teal)]">
          {role}
        </p>
        <ul className="list-disc pl-5 space-y-0 mt-2">
          {traits.map((trait, index) => (
            <li
              key={index}
              className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-normal text-[var(--color-text-secondary)]"
            >
              {trait}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] text-center text-[var(--color-text-secondary)]">
        {label}
      </p>
    </div>
  );
}
