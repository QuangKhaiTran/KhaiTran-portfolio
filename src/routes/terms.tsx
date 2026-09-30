import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { useLocale } from "@/i18n/locale";

const LAST_UPDATED_EN = "June 16, 2026";
const LAST_UPDATED_VI = "16/06/2026";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  const { locale, content, t } = useLocale();
  const { brand } = content.siteConfig;
  const lastUpdated = locale === "vi" ? LAST_UPDATED_VI : LAST_UPDATED_EN;

  if (locale === "vi") {
    return (
      <LegalPage title={t.termsTitle} lastUpdated={lastUpdated}>
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Thoả thuận</h2>
          <p>
            Khi truy cập website do {brand.name} vận hành, bạn đồng ý với các Điều khoản sử dụng
            này. Nếu không đồng ý, vui lòng không sử dụng site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Bản chất của website</h2>
          <p>
            Đây là portfolio và kênh giới thiệu dịch vụ. Nội dung mô tả những gì mình cung cấp với
            tư cách freelance developer. Không có nội dung nào trên site tạo thành đề nghị ràng buộc
            cho đến khi được xác nhận bằng thoả thuận riêng (proposal, SOW hoặc hợp đồng trên nền
            tảng).
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Dịch vụ chuyên môn</h2>
          <p>
            Công việc phát triển thực tế được điều chỉnh bởi hợp đồng riêng giữa bạn và mình —
            dù qua Upwork, Fiverr, Contra hay hợp tác trực tiếp. Hợp đồng đó quyết định phạm vi, bàn
            giao, thanh toán, timeline, quyền sở hữu trí tuệ và bảo mật.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Sở hữu trí tuệ</h2>
          <p>
            Trừ khi có thoả thuận khác bằng văn bản, mình giữ quyền với code, công cụ và framework
            có sẵn từ trước. Phần việc tuỳ chỉnh trong dự án trả phí được chuyển giao theo điều khoản
            hợp đồng dự án. Bạn không được sao chép, scrape hoặc tái xuất bản phần lớn nội dung
            website này khi chưa được phép.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Tuyên bố miễn trừ</h2>
          <p>
            Website và nội dung được cung cấp &quot;nguyên trạng&quot;, không kèm bảo đảm dưới bất kỳ
            hình thức nào. Mình không cam kết thông tin trên site luôn đầy đủ, cập nhật hoặc không
            lỗi. Kết quả trong case study chỉ mang tính ví dụ, không đảm bảo cho dự án tương lai.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Giới hạn trách nhiệm</h2>
          <p>
            Trong phạm vi pháp luật cho phép, {brand.name} không chịu trách nhiệm với thiệt hại gián
            tiếp, phát sinh hoặc hệ quả từ việc bạn sử dụng website. Trách nhiệm liên quan đến dịch
            vụ chuyên môn có trả phí được giới hạn theo hợp đồng dự án tương ứng.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Luật áp dụng</h2>
          <p>
            Các điều khoản này chịu sự điều chỉnh của pháp luật Việt Nam, không phụ thuộc xung đột
            pháp luật. Tranh chấp chỉ liên quan đến việc sử dụng website thuộc thẩm quyền toà án tại
            Cần Thơ, Việt Nam, trừ khi luật bảo vệ người tiêu dùng bắt buộc ở nơi bạn cư trú quy
            định khác.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Thay đổi</h2>
          <p>
            Mình có thể chỉnh sửa điều khoản bất cứ lúc nào. Việc tiếp tục sử dụng site sau khi thay
            đổi được đăng tải đồng nghĩa bạn chấp nhận bản cập nhật.
          </p>
        </section>
      </LegalPage>
    );
  }

  return (
    <LegalPage title={t.termsTitle} lastUpdated={lastUpdated}>
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Agreement</h2>
        <p>
          By accessing this website operated by {brand.name}, you agree to these Terms of Service.
          If you do not agree, please do not use this site.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Nature of this website</h2>
        <p>
          This site is a portfolio and marketing presence. It describes services I offer as a
          freelance developer. Nothing on this site constitutes a binding offer until confirmed in a
          separate written agreement (proposal, statement of work, or platform contract).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Professional services</h2>
        <p>
          Actual development work is governed by a separate contract agreed between you and me —
          whether through Upwork, Fiverr, Contra, or a direct engagement. That contract controls
          scope, deliverables, payment, timelines, intellectual property, and confidentiality.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Intellectual property</h2>
        <p>
          Unless otherwise agreed in writing, I retain ownership of pre-existing code, tools, and
          frameworks. Custom work delivered under a paid engagement is transferred according to the
          terms in the project contract. You may not copy, scrape, or republish substantial portions
          of this website without permission.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Disclaimer</h2>
        <p>
          This website and its content are provided &quot;as is&quot; without warranties of any kind.
          I do not guarantee that information on this site is complete, current, or error-free.
          Outcomes described in case studies are examples and are not guaranteed for future
          projects.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {brand.name} shall not be liable for any
          indirect, incidental, or consequential damages arising from your use of this website.
          Liability related to paid professional services is limited as set out in the applicable
          project contract.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Governing law</h2>
        <p>
          These terms are governed by the laws of Vietnam, without regard to conflict-of-law
          principles. Disputes relating solely to use of this website shall be subject to the
          competent courts in Cần Thơ, Vietnam, unless mandatory consumer protection laws in your
          jurisdiction require otherwise.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Changes</h2>
        <p>
          I may revise these terms at any time. Continued use of the site after changes are posted
          constitutes acceptance of the updated terms.
        </p>
      </section>
    </LegalPage>
  );
}
