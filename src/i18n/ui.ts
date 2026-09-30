import type { Locale } from "./types";

export type UiCopy = {
  langName: string;
  switchTo: string;
  navAria: string;
  openMenu: string;
  closeMenu: string;
  goHome: string;
  pageNotFound: string;
  pageNotFoundDesc: string;
  pageDidntLoad: string;
  pageDidntLoadDesc: string;
  tryAgain: string;
  resultsPromiseBusinessTitle: string;
  resultsPromiseBusinessDesc: string;
  resultsPromiseTransparentTitle: string;
  resultsPromiseTransparentDesc: string;
  resultsDiscussLink: string;
  servicesCustomPackage: string;
  servicesCustomPackageLink: string;
  projectsCaseStudy: string;
  projectsProblem: string;
  projectsSolution: string;
  projectsReadFull: string;
  projectsViewAll: string;
  projectsNdaDemo: string;
  aboutWorkingLanguages: string;
  testimonialsVerify: string;
  testimonialsLinkedIn: string;
  faqEyebrow: string;
  faqTitle: string;
  contactOrEmail: string;
  footerServices: string;
  footerLinks: string;
  footerContact: string;
  footerRights: string;
  caseStudiesBack: string;
  caseStudiesGetInTouch: string;
  caseStudiesCount: string;
  caseStudiesHaveChallenge: string;
  caseStudiesHaveChallengeDesc: string;
  caseStudyClient: string;
  caseStudyDuration: string;
  caseStudyYear: string;
  caseStudyRole: string;
  caseStudyBusinessOutcomes: string;
  caseStudyTechnicalScale: string;
  caseStudyProjectMetrics: string;
  caseStudyProblem: string;
  caseStudySolution: string;
  caseStudyChallenges: string;
  caseStudyApproach: string;
  caseStudyOutcomes: string;
  caseStudyTechStack: string;
  caseStudyWantSimilar: string;
  caseStudyWantSimilarDesc: string;
  caseStudyVerifyLive: string;
  caseStudyLiveWebsite: string;
  contactBookCall: string;
  contactSendEmail: string;
  contactEmailInstead: string;
  contactViewProjects: string;
  contactSubjectDiscovery: string;
  contactSubjectInquiry: string;
  specializations: string;
  deliverables: string;
  legalBack: string;
  legalLastUpdated: string;
  legalQuestions: string;
  privacyTitle: string;
  termsTitle: string;
};

export const uiCopy: Record<Locale, UiCopy> = {
  en: {
    langName: "EN",
    switchTo: "VI",
    navAria: "Primary",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    goHome: "Go home",
    pageNotFound: "Page not found",
    pageNotFoundDesc: "The page you're looking for doesn't exist or has been moved.",
    pageDidntLoad: "This page didn't load",
    pageDidntLoadDesc: "Something went wrong on our end. You can try refreshing or head back home.",
    tryAgain: "Try again",
    resultsPromiseBusinessTitle: "Business-First Approach",
    resultsPromiseBusinessDesc:
      "I don't just write code. I analyze your business process to find the most cost-effective solution.",
    resultsPromiseTransparentTitle: "Transparent Collaboration",
    resultsPromiseTransparentDesc:
      "You get a shared project board, weekly working demos, and clear milestone-based invoicing.",
    resultsDiscussLink: "Let's discuss your project goals",
    servicesCustomPackage: "Need a custom package or retainer?",
    servicesCustomPackageLink: "Email for a free discovery call",
    projectsCaseStudy: "Case Study",
    projectsProblem: "Problem",
    projectsSolution: "Solution",
    projectsReadFull: "Read full case study",
    projectsViewAll: "View all case studies",
    projectsNdaDemo: "NDA · demo on request",
    aboutWorkingLanguages: "Working Languages",
    testimonialsVerify: "Verify project",
    testimonialsLinkedIn: "LinkedIn",
    faqEyebrow: "FAQ",
    faqTitle: "Common questions from new clients",
    contactOrEmail: "Or email directly:",
    footerServices: "Services",
    footerLinks: "Links",
    footerContact: "Contact",
    footerRights: "All rights reserved.",
    caseStudiesBack: "Back to portfolio",
    caseStudiesGetInTouch: "Get in Touch",
    caseStudiesCount: "projects",
    caseStudiesHaveChallenge: "Have a similar challenge?",
    caseStudiesHaveChallengeDesc:
      "Tell me about your project — I'll reply with a scoped plan and quote within 48 hours.",
    caseStudyClient: "Client",
    caseStudyDuration: "Duration",
    caseStudyYear: "Year",
    caseStudyRole: "Role",
    caseStudyBusinessOutcomes: "Business outcomes",
    caseStudyTechnicalScale: "Technical scale",
    caseStudyProjectMetrics: "Project metrics",
    caseStudyProblem: "The problem",
    caseStudySolution: "What I built",
    caseStudyChallenges: "Key challenges",
    caseStudyApproach: "Approach",
    caseStudyOutcomes: "Outcomes",
    caseStudyTechStack: "Tech stack",
    caseStudyWantSimilar: "Want similar results for your business?",
    caseStudyWantSimilarDesc:
      "Email me about your project — I'll reply with a scoped plan and fixed-price quote within 48 hours.",
    caseStudyVerifyLive: "Verify live project",
    caseStudyLiveWebsite: "Live website:",
    contactBookCall: "Book a Free Call",
    contactSendEmail: "Send an Email",
    contactEmailInstead: "Email instead",
    contactViewProjects: "View projects",
    contactSubjectDiscovery: "Discovery Call Request",
    contactSubjectInquiry: "Project Inquiry",
    specializations: "Specializations",
    deliverables: "Deliverables",
    legalBack: "Back to portfolio",
    legalLastUpdated: "Last updated:",
    legalQuestions: "Questions?",
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Service",
  },
  vi: {
    langName: "VI",
    switchTo: "EN",
    navAria: "Điều hướng chính",
    openMenu: "Mở menu",
    closeMenu: "Đóng menu",
    goHome: "Về trang chủ",
    pageNotFound: "Không tìm thấy trang",
    pageNotFoundDesc: "Trang bạn đang tìm không tồn tại hoặc đã được di chuyển.",
    pageDidntLoad: "Trang chưa tải được",
    pageDidntLoadDesc:
      "Đã có lỗi phía hệ thống. Bạn có thể thử tải lại hoặc quay về trang chủ.",
    tryAgain: "Thử lại",
    resultsPromiseBusinessTitle: "Ưu tiên bài toán kinh doanh",
    resultsPromiseBusinessDesc:
      "Không chỉ viết code — mình phân tích quy trình thực tế để chọn hướng làm hiệu quả, tiết kiệm chi phí.",
    resultsPromiseTransparentTitle: "Làm việc rõ ràng, minh bạch",
    resultsPromiseTransparentDesc:
      "Bạn có board dự án chung, demo hàng tuần và thanh toán theo từng milestone đã nghiệm thu.",
    resultsDiscussLink: "Cùng trao đổi mục tiêu dự án",
    servicesCustomPackage: "Cần gói tuỳ chỉnh hoặc retainer?",
    servicesCustomPackageLink: "Nhắn email để tư vấn miễn phí",
    projectsCaseStudy: "Case study",
    projectsProblem: "Vấn đề",
    projectsSolution: "Giải pháp",
    projectsReadFull: "Xem case study đầy đủ",
    projectsViewAll: "Xem tất cả case study",
    projectsNdaDemo: "NDA · demo khi yêu cầu",
    aboutWorkingLanguages: "Ngôn ngữ làm việc",
    testimonialsVerify: "Xác minh dự án",
    testimonialsLinkedIn: "LinkedIn",
    faqEyebrow: "FAQ",
    faqTitle: "Câu hỏi thường gặp từ khách mới",
    contactOrEmail: "Hoặc gửi email trực tiếp:",
    footerServices: "Dịch vụ",
    footerLinks: "Liên kết",
    footerContact: "Liên hệ",
    footerRights: "Đã đăng ký bản quyền.",
    caseStudiesBack: "Quay lại portfolio",
    caseStudiesGetInTouch: "Liên hệ",
    caseStudiesCount: "dự án",
    caseStudiesHaveChallenge: "Bạn đang có bài toán tương tự?",
    caseStudiesHaveChallengeDesc:
      "Kể mình nghe về dự án — mình sẽ phản hồi kèm phạm vi và báo giá trong vòng 48 giờ.",
    caseStudyClient: "Khách hàng",
    caseStudyDuration: "Thời gian",
    caseStudyYear: "Năm",
    caseStudyRole: "Vai trò",
    caseStudyBusinessOutcomes: "Kết quả kinh doanh",
    caseStudyTechnicalScale: "Quy mô kỹ thuật",
    caseStudyProjectMetrics: "Chỉ số dự án",
    caseStudyProblem: "Thách thức",
    caseStudySolution: "Những gì mình xây",
    caseStudyChallenges: "Thách thức chính",
    caseStudyApproach: "Cách triển khai",
    caseStudyOutcomes: "Kết quả đạt được",
    caseStudyTechStack: "Công nghệ",
    caseStudyWantSimilar: "Muốn kết quả tương tự cho doanh nghiệp của bạn?",
    caseStudyWantSimilarDesc:
      "Gửi email mô tả dự án — mình sẽ phản hồi kèm phạm vi và báo giá cố định trong 48 giờ.",
    caseStudyVerifyLive: "Xác minh dự án live",
    caseStudyLiveWebsite: "Website live:",
    contactBookCall: "Đặt lịch gọi miễn phí",
    contactSendEmail: "Gửi email",
    contactEmailInstead: "Gửi email thay thế",
    contactViewProjects: "Xem dự án",
    contactSubjectDiscovery: "Yêu cầu tư vấn nhanh",
    contactSubjectInquiry: "Tư vấn dự án",
    specializations: "Chuyên môn",
    deliverables: "Bàn giao",
    legalBack: "Quay lại portfolio",
    legalLastUpdated: "Cập nhật lần cuối:",
    legalQuestions: "Có câu hỏi?",
    privacyTitle: "Chính sách bảo mật",
    termsTitle: "Điều khoản sử dụng",
  },
};
