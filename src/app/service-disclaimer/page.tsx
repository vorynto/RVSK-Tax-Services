import Link from "next/link";
import { LegalPage } from "@/components/sections/LegalPage";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Service Disclaimer",
  description: "Important information about the scope of RVSK Tax Services’ services and the general information published on this website.",
  path: "/service-disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Service Disclaimer"
      path="/service-disclaimer"
      intro="Please read this disclaimer to understand the scope of the information on this website and of our services."
    >
      <h2>General information only</h2>
      <p>
        Information on this website — including service descriptions, FAQs and resource articles — is provided for general information. It is
        not legal, tax or financial advice for your specific circumstances.
      </p>

      <h2>Scope of services</h2>
      <p>
        The specific scope of any service is agreed with you before work begins. Service descriptions on this website summarise the support
        we provide; they do not guarantee any particular outcome, approval, refund or decision by a government authority.
      </p>
      <p>
        Where a service involves the work of another professional or authority — for example, an income tax audit carried out by a qualified
        auditor — our role is limited to the support agreed with you.
      </p>

      <h2>Timelines</h2>
      <p>
        Timelines depend on the service, on when complete information and documents are provided, and on the processes of the relevant
        government portals and authorities.
      </p>

      <h2>Your information</h2>
      <p>
        Our work relies on the accuracy and completeness of the information and documents you provide. Please let us know promptly if anything
        changes.
      </p>

      <h2>Changes in law</h2>
      <p>
        Laws, forms, thresholds and due dates change frequently. Always refer to the official government portals for the latest position, or{" "}
        <Link href="/contact-us">contact us</Link> to discuss your situation.
      </p>

      <h2>Questions</h2>
      <p>
        If you have questions about this disclaimer, call <a href={site.phone.href}>{site.phone.display}</a> or email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
