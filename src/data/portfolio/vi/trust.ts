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
    title: "Thanh toán theo giai đoạn",
    desc: "Mình chia dự án thành từng giai đoạn rõ ràng — không đòi thanh toán hết ngay từ đầu.",
  },
  {
    icon: "lock",
    title: "NDA khi cần",
    desc: "Mình có thể làm dưới NDA khi dự án liên quan thông tin kinh doanh bảo mật.",
  },
  {
    icon: "shield",
    title: "Bảo hành 30 ngày sau ra mắt",
    desc: "Bảo hành lỗi thuộc phạm vi đã thỏa thuận sau khi ra mắt. Có thể thêm bảo trì nếu cần.",
  },
  {
    icon: "file",
    title: "Ghi rõ phạm vi trước khi làm",
    desc: "Phạm vi được ghi rõ trước khi bắt đầu — kèm báo giá sau buổi trao đổi đầu tiên.",
  },
];
