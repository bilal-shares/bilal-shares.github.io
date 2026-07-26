import type { Metadata } from "next";
import { ProofGallery } from "@/components/proof-gallery";
import { PageHero } from "@/components/page-hero";
import { ContactCta } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "Client Proofs",
  description: "Browse Social.bil delivery proofs across Instagram, Facebook, and YouTube campaigns.",
  alternates: { canonical: "/proofs/" },
};

export default function ProofsPage() {
  return (
    <>
      <PageHero
        eyebrow="Proof archive"
        index="03"
        title="Receipts, not vague success stories."
        copy="Search, filter, and expand 95 delivery snapshots from the Social.bil proof library."
      />
      <section className="section-pad pt-10">
        <div className="section-shell">
          <ProofGallery />
        </div>
      </section>
      <ContactCta />
    </>
  );
}
