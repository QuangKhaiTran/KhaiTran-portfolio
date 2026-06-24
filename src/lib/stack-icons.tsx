import type { ComponentType } from "react";
import {
  AWS,
  MongoDB,
  NestJS,
  NextJs,
  NodeJs,
  OpenAI,
  PostgreSQL,
  Python,
  React as ReactIcon,
  Redis,
  Supabase,
  TailwindCSS,
  TypeScript,
  VercelDark,
} from "developer-icons";
import {
  SiDocker,
  SiRadixui,
  SiReactquery,
  SiResend,
  SiVitest,
  SiZod,
} from "@icons-pack/react-simple-icons";
import sepayLogo from "@/assets/stack/sepay.svg";
import onepayLogo from "@/assets/stack/onepay-icon.png";
import tiptapLogo from "@/assets/stack/tiptap.svg";
import tanstackQueryLogo from "@/assets/stack/tanstack-query.svg";
import radixUiLogo from "@/assets/stack/radix-ui.svg";
import nextIntlLogo from "@/assets/stack/next-intl.svg";

type StackIcon = ComponentType<{ size?: number; className?: string }>;
type BrandIcon = ComponentType<{ size?: number; className?: string; color?: string }>;

function withBrandColor(Icon: BrandIcon): StackIcon {
  return ({ size, className }) => <Icon size={size} className={className} color="default" />;
}

const STACK_ICON_MAP: Record<string, StackIcon> = {
  React: ReactIcon,
  "React Native": ReactIcon,
  "Next.js": NextJs,
  "Node.js": NodeJs,
  NestJS,
  PostgreSQL,
  MongoDB,
  Redis,
  Docker: withBrandColor(SiDocker),
  AWS,
  "AWS ECS": AWS,
  "AWS S3": AWS,
  CloudFront: AWS,
  Python,
  "OpenAI GPT-4o": OpenAI,
  OpenAI,
  Supabase,
  TypeScript,
  "Tailwind CSS": TailwindCSS,
  Vercel: VercelDark,
  Resend: withBrandColor(SiResend),
  "TanStack Query": withBrandColor(SiReactquery),
  "Radix UI": withBrandColor(SiRadixui),
  Zod: withBrandColor(SiZod),
  Vitest: withBrandColor(SiVitest),
  "decimal.js": () => <FallbackIcon label="d" bg="#1E40AF" className="h-[18px] w-[18px]" />,
};

/** Official brand assets (local copies from vendor brand pages). */
const STACK_ASSET_MAP: Record<string, string> = {
  Sepay: sepayLogo,
  OnePay: onepayLogo,
  TipTap: tiptapLogo,
  "TanStack Query": tanstackQueryLogo,
  "Radix UI": radixUiLogo,
  "next-intl": nextIntlLogo,
};

function FallbackIcon({
  label,
  bg,
  className,
}: {
  label: string;
  bg: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none">
      <rect width="24" height="24" rx="6" fill={bg} />
      <text
        x="12"
        y="12"
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize="9"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        {label}
      </text>
    </svg>
  );
}

const CUSTOM_FALLBACKS: Record<string, StackIcon> = {
  "Sanity CMS": () => (
    <FallbackIcon label="S" bg="#F03E2F" className="h-[18px] w-[18px]" />
  ),
  "HubSpot CRM": () => (
    <FallbackIcon label="H" bg="#FF7A59" className="h-[18px] w-[18px]" />
  ),
  LangChain: () => <FallbackIcon label="LC" bg="#1C3C3C" className="h-[18px] w-[18px]" />,
  Mapbox: () => <FallbackIcon label="M" bg="#4264FB" className="h-[18px] w-[18px]" />,
  Zod: () => <FallbackIcon label="Z" bg="#3E67B1" className="h-[18px] w-[18px]" />,
  Vitest: () => <FallbackIcon label="V" bg="#6E9F18" className="h-[18px] w-[18px]" />,
};

export function getStackIcon(name: string) {
  if (STACK_ASSET_MAP[name]) return null;
  return STACK_ICON_MAP[name] ?? CUSTOM_FALLBACKS[name] ?? null;
}

export function StackBadge({ name }: { name: string }) {
  const assetSrc = STACK_ASSET_MAP[name];
  const Icon = getStackIcon(name);
  const iconSize = 18;

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface py-1.5 pl-2 pr-3 text-xs font-medium text-foreground shadow-soft">
      {assetSrc ? (
        <img
          src={assetSrc}
          alt=""
          className="h-[18px] w-[18px] shrink-0 object-contain"
        />
      ) : Icon ? (
        <Icon size={iconSize} className="h-[18px] w-[18px] shrink-0" />
      ) : (
        <span className="grid h-[18px] w-[18px] shrink-0 place-items-center rounded-md bg-muted text-[8px] font-bold text-muted-foreground">
          {name.slice(0, 2).toUpperCase()}
        </span>
      )}
      {name}
    </span>
  );
}
