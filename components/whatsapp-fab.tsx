import { WhatsAppIcon } from "@/components/brand-icons";
import { siteConfig } from "@/data/site";

/**
 * Always-available WhatsApp action on small screens, where the header CTA is
 * collapsed into the menu.
 */
export function WhatsAppFab() {
  return (
    <a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-fab sm:hidden"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}
