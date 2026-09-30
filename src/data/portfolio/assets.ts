import type { ImageKey } from "./types";
// → PORTFOLIO-PENDING.md: testimonial avatars, GCM / Asia Night Life screenshots

import dashboardHero from "@/assets/dashboard-hero.jpg";
import projectLoan from "@/assets/project-loan.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectVinfast from "@/assets/project-vinfast.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectAI from "@/assets/project-ai.jpg";
import projectRealEstate from "@/assets/project-realestate.jpg";
import projectPetId from "@/assets/project-petid.png";
import projectCafinex from "@/assets/project-cafinex.png";
import projectY99 from "@/assets/project-y99.png";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatarKhai from "@/assets/avatar-khai.png";

export const portfolioImages: Record<ImageKey, string> = {
  dashboardHero,
  projectLoan,
  projectHotel,
  projectVinfast,
  projectGcmManager: projectEcommerce,
  projectEcommerce,
  projectAI,
  projectRealEstate,
  projectPetId,
  projectCafinex,
  projectY99,
  avatar1,
  avatar2,
  avatar3,
  avatarKhai,
};

export function getPortfolioImage(key: ImageKey): string {
  return portfolioImages[key];
}
