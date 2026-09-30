import type { EngagementInfo, MoreProject } from "../types";

export const engagement: EngagementInfo = {
  startingLabel: "Bắt đầu từ",
  quoteLabel: "Báo giá cuối sau khi chốt phạm vi.",
  packages: [
    {
      id: "business-software",
      title: "Phần mềm nghiệp vụ",
      from: "Từ $3,000",
      desc: "Cho hệ thống nội bộ, dashboard, CRM, nền tảng quy trình và công cụ vận hành.",
      items: [
        "Phân tích yêu cầu & quy trình",
        "UI/UX",
        "Frontend",
        "Backend",
        "Database",
        "Xác thực",
        "Triển khai",
      ],
      note: "Mức khởi điểm · Báo giá cuối sau khi chốt phạm vi",
    },
    {
      id: "web-saas",
      title: "Web & SaaS",
      from: "Từ $2,000",
      desc: "Cho website doanh nghiệp, cổng khách hàng, thương mại điện tử và SaaS MVP.",
      items: [
        "Frontend responsive",
        "CMS",
        "Backend",
        "Database",
        "Tích hợp",
        "Triển khai",
      ],
      note: "Mức khởi điểm · Báo giá cuối sau khi chốt phạm vi",
    },
    {
      id: "ai-automation",
      title: "AI & Tự động hóa",
      from: "Từ $1,500",
      desc: "Cho tính năng AI tập trung và tự động hóa quy trình.",
      items: [
        "Tích hợp AI",
        "Xử lý dữ liệu",
        "Tích hợp API",
        "Tự động hóa quy trình",
        "Công cụ nội bộ",
      ],
      note: "Mức khởi điểm · Báo giá cuối sau khi chốt phạm vi",
    },
    {
      id: "maintenance",
      title: "Bảo trì",
      from: "Từ $300/tháng",
      desc: "Hỗ trợ liên tục sau khi ra mắt.",
      items: [
        "Sửa lỗi",
        "Giám sát",
        "Cải tiến nhỏ",
        "Cập nhật dependency",
        "Hỗ trợ kỹ thuật",
      ],
      note: "Phát triển tính năng lớn được chốt phạm vi riêng.",
    },
  ],
  payment: {
    title: "Theo milestone",
    desc: "Dự án được chia thành các milestone rõ ràng thay vì yêu cầu thanh toán toàn bộ từ đầu.",
  },
  ownership: {
    title: "Bạn sở hữu sản phẩm",
    desc: "Bạn sở hữu mã nguồn và tài sản dự án sau khi bàn giao và hoàn tất điều khoản thanh toán đã thỏa thuận.",
  },
  scope: {
    title: "Phạm vi được ghi rõ",
    desc: "Phạm vi được ghi nhận trước khi bắt đầu phát triển.",
  },
  warranty: {
    title: "Bảo hành sau ra mắt",
    desc: "Bảo hành 30 ngày cho lỗi thuộc phạm vi đã thỏa thuận sau khi ra mắt.",
  },
};

export const moreProjects: MoreProject[] = [
  {
    slug: "y99-finance-hub",
    title: "Y99 Finance",
    tag: "Tài chính · CMS · Website doanh nghiệp",
    desc: "Website marketing và CMS hỗ trợ hiện diện số cùng vận hành nội dung của công ty tài chính.",
    role: "Full-stack development",
    liveUrl: "https://vayicloudcantho.com/",
  },
  {
    slug: "asia-night-life-platform",
    title: "Asia Night Life",
    tag: "Nền tảng nội dung · Quốc tế",
    desc: "Nền tảng nightlife đa địa điểm với nội dung địa điểm, bản địa hóa và kiến trúc URL tối ưu SEO.",
    role: "Development · Migration · Triển khai kỹ thuật",
    liveUrl: "https://asianightlife.sg/",
  },
  {
    slug: "gcm-manager-dealer-operations",
    title: "GCM Manager",
    tag: "Ô tô · Vận hành nội bộ",
    desc: "Phần mềm quản lý nội bộ kết nối vận hành showroom, quy trình khách hàng và hợp đồng.",
    role: "Full-stack development",
    liveUrl: "https://greencm.vn/",
  },
  {
    slug: "vinfast-dealership-website",
    title: "VinFast Ngọc Anh",
    tag: "Ô tô · Showroom số",
    desc: "Nền tảng trưng bày xe và thu hút lead, thiết kế quanh khám phá sản phẩm và yêu cầu khách hàng.",
    role: "Product development",
    liveUrl: "https://vinfast3scamau.com/",
  },
];
