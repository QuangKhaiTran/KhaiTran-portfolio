import type { ProcessStep } from "../types";

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "Hiểu",
    shortTitle: "Làm rõ bài toán.",
    desc: "Mình và bạn cùng làm rõ hiện team đang chạy thế nào, thông tin thất lạc ở đâu, việc gì đang làm tay lặp lại, và phần mềm thật sự cần giải quyết gì.",
  },
  {
    n: "02",
    title: "Phạm vi",
    shortTitle: "Ưu tiên việc quan trọng trước.",
    desc: "Mình biến yêu cầu thành phạm vi thực tế, ưu tiên quy trình mang lại giá trị cao nhất, và chốt từng giai đoạn trước khi bắt đầu làm.",
  },
  {
    n: "03",
    title: "Thiết kế",
    shortTitle: "Giúp quy trình dễ hiểu.",
    desc: "Mình thiết kế giao diện và cấu trúc hệ thống quanh những người sẽ thực sự dùng hàng ngày.",
  },
  {
    n: "04",
    title: "Xây",
    shortTitle: "Phát triển theo milestone.",
    desc: "Sản phẩm được xây từng bước để bạn thấy tiến độ rõ, và các quyết định quan trọng được kiểm chứng sớm.",
  },
  {
    n: "05",
    title: "Ra mắt",
    shortTitle: "Đưa vào sử dụng.",
    desc: "Cài đặt, chuyển dữ liệu cũ sang và đảm bảo hệ thống chạy ổn định khi dùng thật là một phần của bàn giao — không phải việc để sau.",
  },
  {
    n: "06",
    title: "Hỗ trợ",
    shortTitle: "Giữ hệ thống chạy tốt.",
    desc: "Sau khi ra mắt, mình có thể tiếp tục bảo trì, cải tiến, sửa lỗi và làm tính năng mới khi doanh nghiệp phát triển.",
  },
];
