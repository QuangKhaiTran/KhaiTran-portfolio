import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Boxes,
  Gauge,
  Megaphone,
  Smartphone,
  Workflow,
} from "lucide-react";
import type { FloatCardIcon, ServiceIcon } from "@/data/portfolio/types";

export const serviceIconMap: Record<ServiceIcon, LucideIcon> = {
  workflow: Workflow,
  smartphone: Smartphone,
  bot: Bot,
  megaphone: Megaphone,
};

export const floatCardIconMap: Record<FloatCardIcon, LucideIcon> = {
  gauge: Gauge,
  boxes: Boxes,
  bot: Bot,
  workflow: Workflow,
};
