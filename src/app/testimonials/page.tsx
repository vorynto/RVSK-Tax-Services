import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { TestimonialGrid } from "@/components/sections/Testimonials";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Client Testimonials",
  description: "Read what clients including Joy Security Services, Saisree Logistics and Vel Homes say about working with RVSK Tax Services.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Testimonials", path: "/testimonials" }]}
        eyebrow="Testimonials"
        title="What our clients say about us"
        intro="Feedback shared by clients who work with RVSK Tax Services."
      />
      <section aria-label="Client testimonials" className="py-16 sm:py-20">
        <div className="container-page">
          <TestimonialGrid />
        </div>
      </section>
      <CtaSection />
    </>
  );
}
