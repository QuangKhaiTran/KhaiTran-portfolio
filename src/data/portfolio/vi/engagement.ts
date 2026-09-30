import type { EngagementInfo, MoreProject } from "../types";

export const engagement: EngagementInfo = {
  startingLabel: "Giá bên dưới là mức khởi điểm",
  quoteLabel: "báo giá cuối cùng gửi sau khi chốt phạm vi.",
  packages: [
    {
      id: "business-website",
      title: "Website doanh nghiệp",
      from: "Từ 15 triệu đồng",
      desc: "Cho website giới thiệu công ty, dịch vụ, sản phẩm — đội ngũ tự cập nhật nội dung được.",
      items: [
        "Thiết kế theo nhận diện thương hiệu",
        "Hiển thị tốt trên điện thoại & máy tính",
        "Tự chỉnh sửa nội dung (CMS)",
        "SEO cơ bản & đưa lên mạng",
      ],
    },
    {
      id: "web-saas",
      title: "Web app & SaaS",
      from: "Từ 60 triệu đồng",
      desc: "Cho cổng khách hàng, cửa hàng online và phiên bản đầu của phần mềm thuê bao.",
      items: [
        "Tài khoản & phân quyền người dùng",
        "Dữ liệu & xử lý nghiệp vụ phía sau",
        "Kết nối thanh toán, email & công cụ khác",
        "Đưa vào sử dụng & cài đặt",
      ],
    },
    {
      id: "business-software",
      title: "Phần mềm nghiệp vụ",
      from: "Từ 80 triệu đồng",
      desc: "Cho hệ thống nội bộ, trang quản trị, quản lý khách hàng (CRM), quy trình và công cụ vận hành.",
      items: [
        "Tìm hiểu quy trình & yêu cầu",
        "Thiết kế giao diện",
        "Màn hình, dữ liệu & quy tắc nghiệp vụ",
        "Phân quyền người dùng & đưa vào sử dụng",
      ],
    },
    {
      id: "mobile-apps",
      title: "Ứng dụng di động",
      from: "Từ 80 triệu đồng",
      desc: "Cho app khách hàng, app nội bộ và app cho đội ngũ hiện trường.",
      items: [
        "Một app chạy cả iOS & Android",
        "Kết nối với hệ thống đang có",
        "Đăng nhập & phân quyền",
        "Hỗ trợ đưa app lên App Store & Google Play",
      ],
    },
    {
      id: "ai-automation",
      title: "AI & Tự động hóa",
      from: "Từ 20 triệu đồng",
      desc: "Cho tính năng AI tập trung và tự động hóa quy trình.",
      items: [
        "Đưa AI vào quy trình đang có",
        "Xử lý tài liệu & dữ liệu",
        "Kết nối các công cụ bạn đang dùng",
        "Tự động hóa việc lặp lại",
      ],
    },
    {
      id: "maintenance",
      title: "Bảo trì",
      from: "Từ 3 triệu đồng/tháng",
      desc: "Hỗ trợ liên tục sau khi ra mắt.",
      items: [
        "Sửa lỗi",
        "Theo dõi hệ thống chạy ổn định",
        "Cải tiến nhỏ",
        "Cập nhật bảo mật & phiên bản phần mềm",
      ],
      note: "Tính năng lớn sẽ chốt phạm vi riêng.",
    },
  ],  payment: {
    title: "Theo milestone",
    desc: "Mình chia dự án thành từng giai đoạn rõ ràng — không đòi thanh toán hết ngay từ đầu.",
  },
  ownership: {
    title: "Bạn sở hữu sản phẩm",
    desc: "Bạn sở hữu mã nguồn và tài sản dự án sau khi bàn giao và thanh toán xong theo thỏa thuận.",
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
    desc: "Website công ty tài chính mà marketing tự cập nhật được, giúp biến người xem thành khách hỏi vay.",
    role: "Phát triển full-stack",
    liveUrl: "https://vayicloudcantho.com/",
  },
  {
    slug: "asia-night-life-platform",
    title: "Asia Night Life",
    tag: "Nền tảng nội dung · Quốc tế",
    desc: "Cẩm nang giải trí đêm ở 4 quốc gia, 8 ngôn ngữ, có trợ lý AI gợi ý địa điểm.",
    role: "Phát triển full-stack · SEO",
    liveUrl: "https://asianightlife.sg/",
  },
  {
    slug: "gcm-manager-dealer-operations",
    title: "GCM Manager",
    tag: "Ô tô · Vận hành nội bộ",
    desc: "Phần mềm quản lý nội bộ nối liền vận hành showroom, chăm sóc khách hàng và hợp đồng.",
    role: "Phát triển full-stack",
    liveUrl: "https://greencm.vn/",
  },
  {
    slug: "vinfast-dealership-website",
    title: "VinFast Ngọc Anh",
    tag: "Ô tô · Showroom online",
    desc: "Showroom online để khách xem xe, đặt lái thử và liên hệ đại lý địa phương.",
    role: "Phát triển sản phẩm",
    liveUrl: "https://vinfast3scamau.com/",
  },
];
