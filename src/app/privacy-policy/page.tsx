import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How RVSK Tax Services collects, uses and protects the personal information you share through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy-policy"
      intro="This policy explains what information we collect through this website, why we collect it and how we handle it."
    >
      <h2>Information we collect</h2>
      <p>When you send an enquiry through our contact form, we collect the details you provide:</p>
      <ul>
        <li>Your name</li>
        <li>Your phone number</li>
        <li>Your email address</li>
        <li>The service category you select</li>
        <li>The message you write</li>
      </ul>
      <p>
        If you contact us by phone or email, we receive the information you choose to share in that conversation. Like most websites, our
        hosting provider may also record basic technical information (such as IP address and browser type) in server logs for security and
        operational purposes.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to your enquiry and discuss your requirements</li>
        <li>To provide the services you engage us for</li>
        <li>To protect the website against spam and misuse</li>
      </ul>
      <p>We do not sell your personal information, and we do not use the contact form to send marketing messages.</p>

      <h2>How your information is shared</h2>
      <p>
        Enquiries submitted through the website are delivered to our team by email through a third-party email delivery provider, and the
        website is hosted by a third-party hosting provider. These providers process the information only to deliver those services. We may
        also disclose information where required by law.
      </p>

      <h2>Keeping your information secure</h2>
      <p>
        We take reasonable measures to protect the information you share with us. No method of transmission or storage is completely secure,
        but we aim to handle your information carefully and only for the purposes described here.
      </p>

      <h2>Retention</h2>
      <p>
        We keep enquiry information only for as long as needed to respond to you and for our reasonable business records, unless a longer
        period is required by law.
      </p>

      <h2>Your choices</h2>
      <p>
        You may ask us to access, correct or delete the personal information you have shared with us through the website. To make a request,
        email <a href={`mailto:${site.email}`}>{site.email}</a> or call <a href={site.phone.href}>{site.phone.display}</a>.
      </p>

      <h2>Cookies</h2>
      <p>This website does not use advertising or analytics cookies. If this changes, we will update this policy.</p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy from time to time. The “last updated” date at the top of this page shows when it was last revised.</p>
    </LegalPage>
  );
}
