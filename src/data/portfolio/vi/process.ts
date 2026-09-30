import type { ProcessStep } from "../types";

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "Hiểu",
    shortTitle: "Làm rõ bài toán.",
    desc: "Chúng ta xác định doanh nghiệp đang vận hành thế nào, thông tin thất lạc ở đâu, việc nào đang lặp lại thủ công, và phần mềm thực sự cần giải quyết gì.",
  },
  {
    n: "02",
    title: "Phạm vi",
    shortTitle: "Ưu tiên việc quan trọng trước.",
    desc: "Mình biến yêu cầu thành phạm vi thực tế, ưu tiên quy trình mang lại giá trị cao nhất, và chốt milestone trước khi bắt đầu phát triển.",
  },
  {
    n: "03",
    title: "Thiết kế",
    shortTitle: "Giúp quy trình dễ hiểu.",
    desc: "Mình thiết kế giao diện và cấu trúc hệ thống quanh những người sẽ thực sự dùng.",
  },
  {
    n: "04",
    title: "Xây",
    shortTitle: "Phát triển theo milestone.",
    desc: "Sản phẩm được xây từng bước để tiến độ nhìn thấy được và quyết định quan trọng được kiểm chứng sớm.",
  },
  {
    n: "05",
    title: "Ra mắt",
    shortTitle: "Đưa lên production.",
    desc: "Triển khai, cấu hình, xử lý dữ liệu và sẵn sàng production là một phần của bàn giao — không phải việc nghĩ sau.",
  },
  {
    n: "06",
    title: "Hỗ trợ",
    shortTitle: "Giữ hệ thống chạy tốt.",
    desc: "Sau khi ra mắt, mình có thể tiếp tục bảo trì, cải tiến, sửa lỗi và phát triển tính năng mới khi doanh nghiệp phát triển.",
  },
];
