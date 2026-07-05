import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SocialSlay",
    short_name: "SocialSlay",
    description: "Premium social media growth and creative services.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0F1F",
    theme_color: "#0A0F1F",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
