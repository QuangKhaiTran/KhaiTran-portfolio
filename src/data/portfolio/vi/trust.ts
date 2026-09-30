import type { ClientLogo, TrustGuarantee } from "../trust";
import { clientLogos as enLogos } from "../trust";

export const clientLogos: ClientLogo[] = enLogos.map((logo) => {
  switch (logo.name) {
    case "ERP & Loan Platform":
      return { ...logo, industry: "Fintech · Nội bộ · NDA" };
    case "Y Hotel":
      return { ...logo, industry: "Khách sạn" };
    case "Cafinex":
      return { ...logo, industry: "Thương mại điện tử" };
    case "PETID Vietnam":
      return { ...logo, industry: "Sản phẩm riêng · Đang xây" };
    case "Y99 Finance":
      return { ...logo, industry: "Tài chính" };
    case "Asia Night Life":
      return { ...logo, industry: "Nền tảng nội dung" };
    case "GCM Manager":
      return { ...logo, industry: "Ô tô · Nội bộ" };
    case "VinFast Ngọc Anh":
      return { ...logo, industry: "Ô tô" };
    default:
      return logo;
  }
});

export const trustGuarantees: TrustGuarantee[] = [
  {
    icon: "calendar",
    title: "Thanh toán theo milestone",
    desc: "Dự án được chia thành các milestone rõ ràng thay vì yêu cầu thanh toán toàn bộ từ đầu.",
  },
  {
    icon: "lock",
    title: "NDA khi cần",
    desc: "Mình có thể làm việc dưới NDA khi dự án liên quan thông tin kinh doanh bảo mật.",
  },
  {
    icon: "shield",
    title: "Bảo hành 30 ngày sau ra mắt",
    desc: "Bảo hành lỗi thuộc phạm vi đã thỏa thuận sau khi ra mắt. Có thể thêm bảo trì tùy chọn.",
  },
  {
    icon: "file",
    title: "Ghi phạm vi trước khi code",
    desc: "Phạm vi được ghi nhận trước khi phát triển — kèm báo giá rõ sau bước discovery.",
  },
];
