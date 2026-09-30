import type { Testimonial } from "./types";

export const testimonials: Testimonial[] = [
  {
    id: "t-minh-tran",
    avatarKey: "avatar1",
    name: "Minh Trần",
    role: "Hotel Operations Manager",
    company: "Y Hotel",
    quote:
      "We finally have a clearer way to manage our daily operations instead of keeping everything across messages and spreadsheets.",
    platform: "Direct",
    projectSlug: "y-hotel-booking-platform",
    companyUrl: "https://yhotel.vn/",
    rating: 5,
    isSample: false,
  },
  {
    id: "t-huy-nguyen",
    avatarKey: "avatar2",
    name: "Huy Nguyễn",
    role: "Product Lead",
    company: "Asia Night Life",
    quote:
      "The new platform gave the team a much more structured way to manage the venue information and workflows.",
    platform: "Direct",
    projectSlug: "asia-night-life-platform",
    companyUrl: "https://asianightlife.sg/",
    rating: 5,
    isSample: false,
  },
  {
    id: "t-thao-vo",
    avatarKey: "avatar3",
    name: "Thảo Võ",
    role: "Marketing Director",
    company: "VinFast Ngọc Anh",
    quote:
      "The platform gave us a more professional way to present our vehicles and capture customer inquiries.",
    platform: "Direct",
    projectSlug: "vinfast-dealership-website",
    companyUrl: "https://vinfast3scamau.com/",
    rating: 5,
    isSample: false,
  },
];

export function getTestimonialById(id: string) {
  return testimonials.find((t) => t.id === id);
}

export function getTestimonialByProjectSlug(slug: string) {
  return testimonials.find((t) => t.projectSlug === slug);
}
