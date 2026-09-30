import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { useLocale } from "@/i18n/locale";

const LAST_UPDATED_EN = "June 16, 2026";
const LAST_UPDATED_VI = "16/06/2026";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  const { locale, content, t } = useLocale();
  const { brand, contact } = content.siteConfig;
  const lastUpdated = locale === "vi" ? LAST_UPDATED_VI : LAST_UPDATED_EN;

  if (locale === "vi") {
    return (
      <LegalPage title={t.privacyTitle} lastUpdated={lastUpdated}>
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Tổng quan</h2>
          <p>
            Website này do {brand.name} ({contact.email}) — lập trình viên freelance độc lập tại
            Việt Nam — vận hành. Chính sách này giải thích thông tin nào có thể được thu thập khi
            bạn truy cập site hoặc liên hệ, và cách thông tin đó được sử dụng.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Thông tin mình thu thập</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Thông tin liên hệ bạn chủ động gửi</strong> — như tên, email, công ty và mô
              tả dự án khi bạn gửi email hoặc đặt lịch.
            </li>
            <li>
              <strong>Dữ liệu kỹ thuật</strong> — log máy chủ/hosting cơ bản (IP, trình duyệt, trang
              đã xem) có thể được nhà cung cấp hosting ghi nhận tự động.
            </li>
            <li>
              <strong>Công cụ bên thứ ba</strong> — nếu sau này mình gắn lịch hẹn, analytics hoặc
              dịch vụ tương tự, nhà cung cấp đó có thể thu thập dữ liệu theo chính sách riêng. Mình
              sẽ cập nhật trang này khi bổ sung công cụ mới.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Cách sử dụng thông tin</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Phản hồi yêu cầu và trao đổi về dự án tiềm năng.</li>
            <li>Cung cấp dịch vụ phát triển phần mềm theo hợp đồng.</li>
            <li>Cải thiện website và nắm xu hướng truy cập tổng quan.</li>
            <li>Tuân thủ nghĩa vụ pháp lý khi được yêu cầu.</li>
          </ul>
          <p>Mình không bán thông tin cá nhân của bạn cho bên thứ ba.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Lưu trữ dữ liệu</h2>
          <p>
            Thông tin liên hệ và dự án chỉ được giữ trong thời gian cần thiết để phản hồi, thực hiện
            công việc đã ký, hoặc đáp ứng yêu cầu pháp lý/kế toán. Bạn có thể yêu cầu xóa thư từ
            không còn cần cho dự án đang diễn ra.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Quyền của bạn</h2>
          <p>
            Tuỳ khu vực của bạn, bạn có thể yêu cầu truy cập, chỉnh sửa hoặc xoá dữ liệu cá nhân mà
            mình đang giữ. Gửi email tới {contact.email} và mình sẽ phản hồi trong thời gian hợp lý.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Thay đổi</h2>
          <p>
            Mình có thể cập nhật chính sách theo thời gian. Ngày &quot;Cập nhật lần cuối&quot; ở đầu
            trang phản ánh phiên bản mới nhất.
          </p>
        </section>
      </LegalPage>
    );
  }

  return (
    <LegalPage title={t.privacyTitle} lastUpdated={lastUpdated}>
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Overview</h2>
        <p>
          This website is operated by {brand.name} ({contact.email}), an independent freelance
          software developer based in Vietnam. This policy explains what information may be
          collected when you visit this site or contact me, and how it is used.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Information I collect</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Contact details you provide</strong> — such as your name, email address,
            company, and project description when you email me or reach out through a booking link.
          </li>
          <li>
            <strong>Technical data</strong> — basic server or hosting logs (e.g. IP address, browser
            type, pages visited) that may be collected automatically by the hosting provider.
          </li>
          <li>
            <strong>Third-party tools</strong> — if I embed scheduling, analytics, or similar
            services in the future, those providers may collect data under their own policies. I
            will update this page when such tools are added.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">How I use your information</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>To respond to inquiries and discuss potential projects.</li>
          <li>To deliver contracted software development services.</li>
          <li>To improve this website and understand general traffic patterns.</li>
          <li>To comply with legal obligations when required.</li>
        </ul>
        <p>I do not sell your personal information to third parties.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Data retention</h2>
        <p>
          Contact and project-related information is kept only as long as needed to respond to your
          inquiry, perform contracted work, or meet legal and accounting requirements. You may ask
          me to delete correspondence that is no longer required for an active engagement.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Your rights</h2>
        <p>
          Depending on your location, you may have the right to access, correct, or request
          deletion of personal data I hold about you. Email me at {contact.email} and I will respond
          within a reasonable time.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Changes</h2>
        <p>
          I may update this policy from time to time. The &quot;Last updated&quot; date at the top
          of this page will reflect the latest version.
        </p>
      </section>
    </LegalPage>
  );
}
