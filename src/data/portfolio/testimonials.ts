import type { Testimonial } from "./types";

export const testimonials: Testimonial[] = [
  {
    id: "t-minh-tran",
    avatarKey: "avatar1",
    name: "Minh Tran",
    role: "Hotel Operations Manager",
    company: "Y Hotel",
    quote:
      "Phone-and-spreadsheet bookings are gone. Front desk handles fewer back-and-forth calls, and management finally has one dashboard they trust. Khai stayed on timeline and handled change requests quickly.",
    platform: "Direct",
    projectSlug: "y-hotel-booking-platform",
    companyUrl: "https://yhotel.vn/",
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
      "We migrated 100+ venues to SEO-friendly URLs without breaking a single link, rolled out 8 languages, and shipped the admin tools our team needed — all without downtime for users.",
    platform: "Direct",
    projectSlug: "asia-night-life-platform",
    companyUrl: "https://asianightlife.sg/",
    rating: 5,
    isSample: false,
  },
  {
    id: "t-thao-vo",
    avatarKey: "avatar3",
    name: "Thao Vo",
    role: "Marketing Director",
    company: "VinFast Ngọc Anh",
    quote:
      "Our sales team stopped chasing specs in chat groups. Vehicle listings stay current via sync scripts, and leads flow straight from the site. Clear communication throughout the build.",
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
