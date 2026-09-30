import { Stagger, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  id,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}) {
  return (
    <Stagger className={cn("max-w-3xl", className)} id={id} stagger={0.1}>
      {eyebrow ? (
        <StaggerItem
          as="p"
          variant="fadeIn"
          className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground"
        >
          {eyebrow}
        </StaggerItem>
      ) : null}
      <StaggerItem>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
      </StaggerItem>
      {subtitle ? (
        <StaggerItem
          as="p"
          className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {subtitle}
        </StaggerItem>
      ) : null}
    </Stagger>
  );
}
