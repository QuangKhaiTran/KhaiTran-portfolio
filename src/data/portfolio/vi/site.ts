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
    tagline: "Business Software Developer",
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
      `mailto:${EMAIL}?subject=${encodeURIComponent("Yêu cầu tư vấn dự án")}`,
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
      "Mình xây web app tuỳ chỉnh, công cụ nội bộ, sản phẩm SaaS và quy trình AI — thay spreadsheet, giảm việc lặp lại, giúp đội ngũ vận hành hiệu quả hơn.",
    supportingText:
      "Từ website doanh nghiệp đến nền tảng vận hành đầy đủ, mình bắt đầu từ bài toán — rồi thiết kế và xây phần mềm quanh quy trình thực tế.",
    primaryCta: "Kể mình nghe về dự án →",
    secondaryCta: "Xem dự án tiêu biểu ↓",
    proofLine: "9+ dự án production · Web · SaaS · Công cụ nội bộ · AI",
    locationLine: "Tại Việt Nam · UTC+7 · Remote toàn cầu",
  },
  sections: {
    selectedWork: {
      eyebrow: "Minh chứng",
      title: "Dự án tiêu biểu",
      subtitle:
        "Một số hệ thống nghiệp vụ, sản phẩm và nền tảng số mình đã tham gia xây dựng.",
    },
    services: {
      eyebrow: "Dịch vụ",
      title: "Phần mềm xây quanh doanh nghiệp của bạn.",
      subtitle:
        "Mình không bắt đầu từ stack công nghệ. Mình bắt đầu từ cách đội ngũ đang làm việc, đâu đang mất thời gian, và phần mềm thực sự cần giải quyết gì.",
    },
    projects: {
      eyebrow: "Case study",
      title: "Dự án nổi bật",
      subtitle:
        "Bốn hệ thống cho thấy cách mình biến quy trình kinh doanh thành phần mềm production.",
    },
    moreWork: {
      eyebrow: "Thêm",
      title: "Thêm dự án",
      subtitle: "Một vài hệ thống và sản phẩm số khác mình đã làm.",
    },
    process: {
      eyebrow: "Quy trình",
      title: "Từ bài toán kinh doanh đến phần mềm production.",
      subtitle:
        "Phần mềm tốt bắt đầu từ hiểu quy trình — không phải chọn framework.",
    },
    about: {
      eyebrow: "Giới thiệu",
      title: "Mình xây phần mềm cho cách doanh nghiệp thực sự vận hành.",
      subtitle: "Mình là Trần Quang Khái, full-stack developer tại Việt Nam.",
    },
    testimonials: {
      eyebrow: "Nhận xét",
      title: "Khách hàng nói gì",
      subtitle: "Phản hồi từ các đội ngũ mình đã cùng ship phần mềm.",
    },
    engagement: {
      eyebrow: "Hợp tác",
      title: "Hợp tác đơn giản. Phạm vi rõ ràng.",
      subtitle:
        "Mỗi dự án khác nhau, nên mình dựa trên phạm vi và độ phức tạp của quy trình để chốt mức giá cuối.",
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
        "Chia sẻ vài thông tin — mình sẽ xem bài toán, đề xuất hướng làm thực tế và gửi đề xuất có phạm vi rõ.",
      submitCta: "Gửi mô tả dự án →",
      supporting: "Không ràng buộc. Mình sẽ xem và phản hồi lại.",
    },
    cta: {
      badge: "Bước tiếp theo",
      title: "Có quy trình nào đang làm chậm đội ngũ của bạn?",
      subtitle:
        "Có thể là spreadsheet đội ngũ đã dùng quá tải.\nCó thể khách hàng cần portal tốt hơn.\nCó thể doanh nghiệp đã lớn đến mức quy trình thủ công đang đắt đỏ.\n\nHãy kể mình nghe bạn đang muốn khắc phục gì.",
      primaryCta: "Kể mình nghe về dự án →",
      secondaryCta: "Xem dự án tiêu biểu",
      supporting:
        "Mình sẽ xem bài toán, đề xuất hướng làm thực tế và gửi đề xuất có phạm vi rõ.",
    },
  },
  footer: {
    blurb: "Phần mềm tuỳ chỉnh · Web · SaaS · Tự động hóa AI",
    legal: [
      { label: "Bảo mật", href: "/privacy" },
      { label: "Điều khoản", href: "/terms" },
    ],
    copyright: "© 2026 Trần Quang Khái. Built with Next.js.",
  },
  freelancePlatforms: enSite.freelancePlatforms,
};
