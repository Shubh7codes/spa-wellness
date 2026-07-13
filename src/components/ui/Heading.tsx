import { cn } from "@/lib/utils";

interface HeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function Heading({
  title,
  subtitle,
  className,
}: HeadingProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {subtitle && (
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--gold)]">
          {subtitle}
        </p>
      )}

      <h2 className="font-heading text-5xl leading-tight lg:text-6xl">
        {title}
      </h2>
    </div>
  );
}