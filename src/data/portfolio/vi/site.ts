import type { SiteConfig } from "../types";
import { siteConfig as enSite, portfolioMeta as enMeta } from "../site";

export const portfolioMeta = enMeta;

const EMAIL = enSite.contact.email;
const BOOKING_URL = enSite.contact.bookingUrl;
const SOCIAL = enSite.social;
const SITE_URL = enSite.seo.canonicalUrl;

export const siteConfig: SiteConfig = {
  brand: {
    name: "Trần Quang Khái",
    tagline: "Lập trình viên phần mềm doanh nghiệp",
    description: "Phần mềm tuỳ chỉnh · Web · SaaS · Công cụ nội bộ · Tự động hóa AI",
  },
  seo: {
    title:
      "Trần Quang Khái — Business Software Developer | Web, SaaS & Automation",
    description:
      "Trần Quang Khái xây phần mềm nghiệp vụ, công cụ nội bộ, sản phẩm SaaS và tự động hóa AI cho startup và doanh nghiệp đang phát triển.",
    ogTitle: "Trần Quang Khái — Business Software Developer",
    ogDescription: "Mình biến quy trình kinh doanh rối rắm thành phần mềm đáng tin cậy.",
    canonicalUrl: SITE_URL,
  },
  contact: {
    email: EMAIL,
    phone: "",
    address: "Cần Thơ, Việt Nam",
    bookingUrl: BOOKING_URL,
    calendlyUrl:
      BOOKING_URL ||
      `mailto:${EMAIL}?subject=${encodeURIComponent("Tư vấn dự án")}`,
  },
  social: SOCIAL,
  nav: [
    { label: "Dự án", href: "#work" },
    { label: "Dịch vụ", href: "#services" },
    { label: "Giới thiệu", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
  navCta: "Bắt đầu dự án",
  mobileStickyCta: "Bắt đầu dự án →",
  hero: {
    eyebrow: "PHẦN MỀM NGHIỆP VỤ · WEB · TỰ ĐỘNG HÓA",
    headline: "Mình biến quy trình kinh doanh rối rắm thành phần mềm đáng tin cậy.",
    subheadline:
      "Mình làm website, phần mềm quản lý nội bộ, sản phẩm online và công cụ AI theo đúng nhu cầu doanh nghiệp — thay cho file Excel, bớt việc lặp đi lặp lại, giúp đội ngũ làm việc gọn gàng hơn.",
    supportingText:
      "Từ website doanh nghiệp đến nền tảng vận hành đầy đủ, mình bắt đầu từ bài toán thật — rồi mới thiết kế và viết phần mềm bám theo cách team đang làm việc.",
    primaryCta: "Kể mình nghe về dự án →",
    secondaryCta: "Xem dự án tiêu biểu ↓",
    proofLine: "8+ dự án đang chạy thực tế · Website · Phần mềm quản lý · Ứng dụng · AI",
    locationLine: "Việt Nam · UTC+7 · Làm việc từ xa toàn cầu",
  },
  sections: {
    selectedWork: {
      eyebrow: "Minh chứng",
      title: "Khách hàng & sản phẩm",
      subtitle:
        "Những doanh nghiệp và sản phẩm mình đã cùng xây phần mềm.",
    },
    services: {
      eyebrow: "Dịch vụ",
      title: "Phần mềm xây quanh doanh nghiệp của bạn.",
      subtitle:
        "Mình không bắt đầu từ việc chọn công nghệ. Mình bắt đầu từ cách team đang làm việc, chỗ nào đang mất thời gian, và phần mềm thật sự cần giải quyết gì.",
    },
    projects: {
      eyebrow: "Câu chuyện dự án",
      title: "Dự án nổi bật",
      subtitle:
        "Bốn hệ thống cho thấy cách mình biến quy trình kinh doanh thành phần mềm chạy thật.",
    },
    moreWork: {
      eyebrow: "Dự án khác",
      title: "Các dự án khác",
      subtitle: "Vài hệ thống và sản phẩm số khác mình đã làm.",
    },
    process: {
      eyebrow: "Quy trình",
      title: "Từ bài toán kinh doanh đến phần mềm dùng được mỗi ngày.",
      subtitle:
        "Phần mềm tốt bắt đầu từ việc hiểu quy trình — không phải chọn công nghệ trước.",
    },
    about: {
      eyebrow: "Giới thiệu",
      title: "Mình xây phần mềm cho cách doanh nghiệp thực sự vận hành.",
      subtitle: "Mình là Trần Quang Khái, full-stack developer ở Việt Nam.",
    },
    testimonials: {
      eyebrow: "Nhận xét",
      title: "Khách hàng nói gì",
      subtitle: "Phản hồi từ các doanh nghiệp mình đã đồng hành.",
    },
    engagement: {
      eyebrow: "Hợp tác",
      title: "Hợp tác đơn giản. Phạm vi rõ ràng.",
      subtitle:
        "Mỗi dự án khác nhau, nên mình xem phạm vi và độ phức tạp quy trình rồi mới chốt giá cuối.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Câu hỏi thường gặp",
      subtitle: "Câu trả lời thực tế trước khi bắt đầu.",
    },
    contact: {
      eyebrow: "Liên hệ",
      title: "Kể mình nghe về dự án",
      subtitle:
        "Chia sẻ vài thông tin — mình sẽ xem bài toán, gợi ý hướng làm thực tế và gửi đề xuất có phạm vi rõ.",
      submitCta: "Gửi mô tả dự án →",
      supporting: "Không cần cam kết gì. Mình đọc rồi trả lời lại.",
    },
    cta: {
      badge: "Bước tiếp theo",
      title: "Có quy trình nào đang làm chậm team của bạn?",
      subtitle:
        "Có thể file Excel của team đã quá tải.\nCó thể khách hàng cần một cách đặt hàng, đặt lịch hay tra cứu dễ hơn.\nCó thể doanh nghiệp đã lớn đến mức làm tay đang tốn kém.\n\nKể mình nghe bạn đang muốn khắc phục gì.",
      primaryCta: "Kể mình nghe về dự án →",
      secondaryCta: "Xem dự án tiêu biểu",
      supporting:
        "Mình sẽ xem bài toán, gợi ý hướng làm thực tế và gửi đề xuất có phạm vi rõ.",
    },
  },
  footer: {
    blurb: "Phần mềm tuỳ chỉnh · Web · SaaS · Tự động hóa AI",
    legal: [
      { label: "Bảo mật", href: "/privacy" },
      { label: "Điều khoản", href: "/terms" },
    ],
    copyright: "© 2026 Trần Quang Khái.",
  },
  freelancePlatforms: enSite.freelancePlatforms,
};
