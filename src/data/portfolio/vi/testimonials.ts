import type { Testimonial } from "../types";

export const testimonials: Testimonial[] = [
  {
    id: "t-minh-tran",
    avatarKey: "avatar1",
    name: "Minh Tran",
    role: "Quản lý vận hành khách sạn",
    company: "Y Hotel",
    quote:
      "Cuối cùng chúng tôi cũng có cách rõ ràng hơn để quản lý vận hành hàng ngày, thay vì để mọi thứ nằm rải rác trên tin nhắn và spreadsheet.",
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
      "Nền tảng mới giúp đội ngũ quản lý thông tin địa điểm và quy trình có cấu trúc hơn rất nhiều.",
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
    role: "Giám đốc Marketing",
    company: "VinFast Ngọc Anh",
    quote:
      "Nền tảng giúp chúng tôi giới thiệu xe chuyên nghiệp hơn và thu hút yêu cầu khách hàng tốt hơn.",
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
