import type { ImageKey } from "./types";
import type { ClientLogoKey } from "./trust";
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

import clientPetid from "@/assets/logos/client-petid.png";
import clientY99 from "@/assets/logos/client-y99.png";
import clientCafinex from "@/assets/logos/client-cafinex.png";
import clientYhotel from "@/assets/logos/client-yhotel.png";
import clientVinfast from "@/assets/logos/client-vinfast.png";
import clientGreencm from "@/assets/logos/client-greencm.png";
import clientAsianightlife from "@/assets/logos/client-asianightlife.png";

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

/** Brand marks scraped from each project's live site */
export const clientLogoImages: Record<ClientLogoKey, string> = {
  petid: clientPetid,
  y99: clientY99,
  cafinex: clientCafinex,
  yhotel: clientYhotel,
  vinfast: clientVinfast,
  greencm: clientGreencm,
  asianightlife: clientAsianightlife,
};

export function getPortfolioImage(key: ImageKey): string {
  return portfolioImages[key];
}

export function getClientLogoImage(key: ClientLogoKey): string {
  return clientLogoImages[key];
}
