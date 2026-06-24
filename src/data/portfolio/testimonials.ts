import type { Testimonial } from "./types";

export const testimonials: Testimonial[] = [
  {
    id: "t-minh-tran",
    avatarKey: "avatar1",
    name: "Minh Tran",
    role: "Hotel Operations Manager",
    company: "Y Hotel",
    quote:
      "The booking and operations system reduced front-desk back-and-forth and gave management one reliable dashboard. Khai handled changes quickly and stayed on timeline.",
    platform: "Direct",
    projectSlug: "y-hotel-booking-platform",
    rating: 5,
    isSample: false,
  },
  {
    id: "t-huy-nguyen",
    avatarKey: "avatar2",
    name: "Huy Nguyen",
    role: "Product Lead",
    company: "Asia Night Life",
    quote:
      "From slug migration to multilingual SEO and admin workflows, the delivery was structured and dependable. We launched improvements without disrupting existing users.",
    platform: "Direct",
    projectSlug: "asia-night-life-platform",
    rating: 5,
    isSample: false,
  },
  {
    id: "t-thao-vo",
    avatarKey: "avatar3",
    name: "Thao Vo",
    role: "Marketing Director",
    company: "VF Ngọc Anh",
    quote:
      "The dealership site made it easy for our team to keep vehicle listings current and route leads to sales. Clear communication throughout the build.",
    platform: "Direct",
    projectSlug: "vinfast-dealership-website",
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
