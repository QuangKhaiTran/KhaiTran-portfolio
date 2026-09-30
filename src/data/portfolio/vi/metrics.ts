import type { ResultMetric, TechName } from "../types";
import { techStack as enTech } from "../metrics";

export const resultMetrics: ResultMetric[] = [
  { value: "9+", label: "Dự án production" },
  { value: "4+", label: "Lĩnh vực kinh doanh" },
  { value: "Web · SaaS · Mobile", label: "Loại sản phẩm" },
  { value: "Remote", label: "Việt Nam · Toàn cầu" },
];

export const techStack: TechName[] = enTech;
