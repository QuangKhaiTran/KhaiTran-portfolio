# Portfolio — việc cần anh bổ sung sau

Checklist các mục cần thông tin từ anh trước khi publish / tối ưu trust trên site.

## Contact & social

| Việc | File / chỗ cần điền | Ghi chú |
|------|---------------------|---------|
| Link Upwork, Fiverr, LinkedIn, GitHub | `src/data/portfolio/site.ts` → `social` | Điền URL đầy đủ. Khi có link, hero/footer sẽ hiện badge tương ứng. |
| Calendly URL thật (nếu có) | `src/data/portfolio/site.ts` → `contact.calendlyUrl` | Hiện đang dùng `mailto:`. Nếu có Calendly, thay URL và cập nhật copy FAQ/CTA nếu muốn nhắc “book call”. |
| Email domain riêng | `src/data/portfolio/site.ts` → `contact.email` + hằng `EMAIL` ở đầu file | Ví dụ `hello@khai.dev`. Nhớ cập nhật `calendlyUrl` nếu vẫn dùng mailto. |

## Ảnh & nội dung

| Việc | File / chỗ cần điền | Ghi chú |
|------|---------------------|---------|
| Ảnh testimonial thật | `src/assets/avatar-1.jpg`, `avatar-2.jpg`, `avatar-3.jpg` hoặc thêm key mới trong `src/data/portfolio/assets.ts` + `types.ts` | Gắn với `src/data/portfolio/testimonials.ts` → `avatarKey`. |
| Ảnh GCM Manager / Asia Night Life chính xác | Thêm file vào `src/assets/`, map trong `src/data/portfolio/assets.ts`, cập nhật `imageKey` trong `src/data/portfolio/case-studies.ts` | Hiện tạm dùng `projectEcommerce` (GCM) và `projectAI` (Asia Night Life). |

## Platform badges

| Việc | File / chỗ cần điền | Ghi chú |
|------|---------------------|---------|
| Bật lại badge platform | `src/data/portfolio/site.ts` → `freelancePlatforms` | Ví dụ: `["Upwork", "Fiverr", "Contra"]`. Chỉ bật khi đã điền link tương ứng trong `social`. |

## Sau khi điền xong (tùy chọn)

- Cập nhật hero/SEO nếu muốn nhắc lại Upwork/Fiverr/Contra (`site.ts` → `hero.subheadline`, `seo.description`).
- Bật hiển thị `via Upwork` / `via Fiverr` trên testimonials (tự bật khi có ít nhất một link trong `social.upwork`, `social.fiverr`, `social.linkedin`, hoặc `social.github`).
