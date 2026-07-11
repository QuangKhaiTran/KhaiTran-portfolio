# Portfolio — việc cần anh bổ sung sau

Checklist các mục cần thông tin từ anh trước khi publish / tối ưu trust trên site.

## Cách nhanh nhất: dùng `.env.local`

Copy `.env.example` → `.env.local` và điền URL. Build/deploy sẽ tự lấy giá trị.

| Biến | Tác dụng |
|------|----------|
| `VITE_PORTFOLIO_EMAIL` | Email liên hệ (thay Gmail) |
| `VITE_PORTFOLIO_CALENDLY` | Link book call — bật nút "Book a Free Call" |
| `VITE_PORTFOLIO_LINKEDIN` | Hiện badge hero + footer |
| `VITE_PORTFOLIO_GITHUB` | Hiện badge hero + footer |
| `VITE_PORTFOLIO_UPWORK` | Badge + platform trust |
| `VITE_PORTFOLIO_FIVERR` | Badge + platform trust |
| `VITE_PORTFOLIO_CONTRA` | Badge + platform trust |

Hoặc sửa trực tiếp `src/data/portfolio/site.ts` (hằng `SOCIAL`, `EMAIL`, `BOOKING_URL`).

## Contact & social

| Việc | File / chỗ cần điền | Ghi chú |
|------|---------------------|---------|
| Link Upwork, Fiverr, LinkedIn, GitHub | `.env.local` hoặc `site.ts` → `SOCIAL` | Hero + footer tự hiện badge |
| Calendly URL thật | `VITE_PORTFOLIO_CALENDLY` hoặc `BOOKING_URL` | Khi có URL, CTA đổi thành "Book a Free Call" |
| Email domain riêng | `VITE_PORTFOLIO_EMAIL` hoặc `EMAIL` | Ví dụ `hello@khai.dev` |

## Ảnh & nội dung

| Việc | File / chỗ cần điền | Ghi chú |
|------|---------------------|---------|
| Ảnh testimonial thật | `src/assets/avatar-1.jpg`, `avatar-2.jpg`, `avatar-3.jpg` | Gắn với `testimonials.ts` → `avatarKey` |
| LinkedIn reviewer (tùy chọn) | `testimonials.ts` → `linkedinUrl` | Tăng trust — link profile công khai |
| Ảnh GCM / Asia Night Life chính xác | `assets.ts` + `case-studies.ts` → `imageKey` | GCM đã dùng `projectGcmManager` |

## Đã làm sẵn trên site (không cần code thêm)

- **Client logos** — section "Trusted by" với link live site
- **Trust guarantees** — milestone payments, NDA, 30-day warranty
- **Business metrics** trên case study cards + trang chi tiết
- **Verify project** trên testimonials — link tới site đã ship
- **NDA note** trên dự án fintech (loan ERP)
- **Dual CTA** — book call (khi có Calendly) + email luôn hiện ở footer CTA

## Sau khi điền xong (tùy chọn)

- Thêm `linkedinUrl` cho từng testimonial nếu client đồng ý
- Cập nhật hero/SEO nếu muốn nhắc Upwork/Fiverr trong copy
