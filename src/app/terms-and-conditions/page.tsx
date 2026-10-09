import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms and Conditions",
  description: "The terms that apply when you use the RVSK Tax Services website.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      path="/terms-and-conditions"
      intro="These terms apply to your use of this website. By using the website, you agree to them."
    >
      <h2>About this website</h2>
      <p>
        This website is operated by {site.name}. It provides information about our services and a way to contact us. It does not by itself
        create a client relationship; any engagement for services is agreed separately with you.
      </p>

      <h2>Information on this website</h2>
      <p>
        The content on this website, including our resource articles, is general information. It is not professional advice and should not
        be relied upon as a substitute for advice on your specific situation. Please read our{" "}
        <Link href="/service-disclaimer">Service Disclaimer</Link>.
      </p>
      <p>
        We try to keep the content accurate and current, but laws, rules and official procedures change frequently, and we do not guarantee
        that every page reflects the latest position at all times.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Do not use the website or its contact form to send unlawful, misleading or harmful content.</li>
        <li>Do not attempt to disrupt, overload or gain unauthorised access to the website.</li>
        <li>Do not submit someone else’s personal information without their permission.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The text, design and graphics on this website belong to {site.name} unless stated otherwise. Third-party names and trademarks (for
        example, Tally) belong to their respective owners and are used only to describe our services.
      </p>

      <h2>External links</h2>
      <p>
        We link to official government portals and other external websites for convenience. We are not responsible for the content or
        availability of those websites.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent permitted by law, {site.name} is not liable for any loss arising from reliance on general information published on this
        website.
      </p>

      <h2>Privacy</h2>
      <p>
        Our <Link href="/privacy-policy">Privacy Policy</Link> explains how we handle the information you share through the website.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
