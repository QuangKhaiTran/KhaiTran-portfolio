import type { Profile } from "../types";

export const profile: Profile = {
  name: "Trần Quang Khái",
  title: "Business Software Developer",
  avatarKey: "avatarKhai",
  bio: "Mình là Trần Quang Khái, lập trình viên full-stack tại Việt Nam.",
  longBio:
    "Công việc của mình nằm giữa vận hành doanh nghiệp và phát triển phần mềm. Mình thích biến những quy trình đang nằm rải rác trên spreadsheet, tin nhắn, tài liệu và thao tác thủ công thành hệ thống mà mọi người có thể dùng mỗi ngày.",
  skills: [
    "Next.js & React",
    "TypeScript",
    "Node.js",
    "PostgreSQL & Supabase",
    "OpenAI & tự động hóa",
    "Vercel & Docker",
  ],
  languages: [
    "Tiếng Việt — Bản ngữ",
    "English — Trình độ chuyên môn làm việc",
  ],
  values: [
    {
      title: "Rõ ràng",
      desc: "Phần mềm phải giúp quy trình dễ hiểu hơn, không thêm một lớp phức tạp.",
    },
    {
      title: "Kiến trúc thực tế",
      desc: "Mình chọn kiến trúc dựa trên nhu cầu thật và mức tăng trưởng kỳ vọng — không phức tạp vì thích phức tạp.",
    },
    {
      title: "Trách nhiệm bàn giao",
      desc: "Mình muốn giao phần mềm mà doanh nghiệp có thể duy trì, hiểu và tiếp tục phát triển.",
    },
    {
      title: "Dùng thật",
      desc: "Giao diện đẹp chẳng có ý nghĩa nếu đội ngũ vẫn phải giữ năm spreadsheet phía sau.",
    },
  ],
  stackGroups: [
    {
      label: "Frontend",
      items: "Next.js · React · TypeScript · Tailwind CSS",
    },
    {
      label: "Backend & Dữ liệu",
      items: "Node.js · PostgreSQL · Supabase",
    },
    {
      label: "Hạ tầng",
      items: "Vercel · Docker · Redis",
    },
    {
      label: "AI & Tự động hóa",
      items: "OpenAI · Python · API & tự động hóa quy trình",
    },
  ],
  location: "Cần Thơ, Việt Nam · UTC+7",
  availability: "Nhận dự án remote tại Việt Nam và thị trường quốc tế.",
};

export const aboutHighlights = [
  { label: "Đã ship", value: "9+ dự án" },
  { label: "Tập trung", value: "Web · SaaS · Công cụ nội bộ" },
  { label: "Múi giờ", value: "UTC+7 · Remote toàn cầu" },
  { label: "Hợp tác", value: "Milestone · Phạm vi rõ" },
];
