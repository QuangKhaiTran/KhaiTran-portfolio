import { StackBadge } from "@/lib/stack-icons";

export function TechStackBadges({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((name) => (
        <StackBadge key={name} name={name} />
      ))}
    </div>
  );
}
