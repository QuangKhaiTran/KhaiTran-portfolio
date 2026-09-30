import type { Profile } from "../types";

export const profile: Profile = {
  name: "Trần Quang Khái",
  title: "Business Software Developer",
  avatarKey: "avatarKhai",
  bio: "Mình là Trần Quang Khái, lập trình viên full-stack ở Việt Nam.",
  longBio:
    "Công việc của mình nằm giữa vận hành doanh nghiệp và phát triển phần mềm. Mình thích lấy những quy trình đang nằm rải rác trên spreadsheet, tin nhắn, tài liệu và thao tác thủ công — rồi biến thành hệ thống team dùng được mỗi ngày.",
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
    "English — Dùng tốt trong công việc",
  ],
  values: [
    {
      title: "Rõ ràng",
      desc: "Phần mềm phải giúp quy trình dễ hiểu hơn — không thêm một lớp rối.",
    },
    {
      title: "Vừa đủ, đúng nhu cầu",
      desc: "Mình làm đúng những gì sản phẩm cần hiện tại, vẫn chừa chỗ để mở rộng — không làm phức tạp chỉ vì thích.",
    },
    {
      title: "Trách nhiệm bàn giao",
      desc: "Mình muốn bàn giao phần mềm team bạn hiểu được, giữ được và còn mở rộng tiếp được.",
    },
    {
      title: "Dùng thật",
      desc: "Giao diện đẹp chẳng có ý nghĩa nếu team vẫn phải giữ năm spreadsheet phía sau.",
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
  { label: "Đã hoàn thành", value: "8+ dự án" },
  { label: "Tập trung", value: "Website · Phần mềm quản lý · Công cụ nội bộ" },
  { label: "Múi giờ", value: "UTC+7 · Làm việc từ xa toàn cầu" },
  { label: "Hợp tác", value: "Theo giai đoạn · Phạm vi rõ" },
];
