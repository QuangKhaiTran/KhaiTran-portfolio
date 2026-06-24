import { ExternalLink } from "lucide-react";

export function CaseStudyLiveLink({
  href,
  label = "View live site",
  className = "",
}: {
  href: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary ${className}`}
    >
      {label}
      <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" />
    </a>
  );
}
