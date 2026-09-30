import type { Testimonial } from "../types";

export const testimonials: Testimonial[] = [
  {
    id: "t-minh-tran",
    avatarKey: "avatar1",
    name: "Minh Tran",
    role: "Quản lý vận hành khách sạn",
    company: "Y Hotel",
    quote:
      "Cuối cùng team cũng có chỗ rõ để chạy vận hành hàng ngày — không còn để mọi thứ nằm rải rác trên tin nhắn và spreadsheet.",
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
      "Platform mới giúp team quản lý thông tin địa điểm và quy trình rõ ràng, gọn hơn hẳn.",
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
      "Nền tảng giúp mình giới thiệu xe chuyên nghiệp hơn, và nhận yêu cầu từ khách dễ hơn.",
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
