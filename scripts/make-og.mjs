// Regenerates public/og-image.png (1200x630) from an inline SVG.
// Run with: npm run make:og
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="#FCAF45"/>
      <stop offset="0.28" stop-color="#F56040"/>
      <stop offset="0.55" stop-color="#E1306C"/>
      <stop offset="0.8" stop-color="#833AB4"/>
      <stop offset="1" stop-color="#405DE6"/>
    </linearGradient>
    <radialGradient id="glow1" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#E1306C" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#E1306C" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#833AB4" stop-opacity="0.5"/>
      <stop offset="1" stop-color="#833AB4" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow3" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#25D366" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#25D366" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#08080a"/>
  <circle cx="150" cy="90" r="380" fill="url(#glow1)"/>
  <circle cx="1080" cy="120" r="360" fill="url(#glow2)"/>
  <circle cx="1010" cy="600" r="320" fill="url(#glow3)"/>

  <rect x="72" y="70" width="76" height="76" rx="22" fill="url(#ig)"/>
  <text x="110" y="126" text-anchor="middle" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="52" font-weight="800" fill="#ffffff">S</text>

  <text x="176" y="122" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="40" font-weight="800" letter-spacing="2" fill="#ffffff">SOCIAL<tspan fill="url(#ig)">.BIL</tspan></text>

  <text x="72" y="290" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="96" font-weight="800" letter-spacing="-4" fill="#ffffff">Become</text>
  <text x="72" y="392" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="96" font-weight="800" letter-spacing="-4" fill="url(#ig)">impossible</text>
  <text x="72" y="494" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="96" font-weight="800" letter-spacing="-4" fill="#ffffff">to ignore.</text>

  <rect x="72" y="536" width="336" height="56" rx="28" fill="#25D366"/>
  <path d="M96.5 552.5a12 12 0 0 0-10.2 18.3l-1.3 4.7 4.9-1.3a12 12 0 1 0 6.6-21.7Zm0 2.2a9.8 9.8 0 1 1-5.2 18.1l-.3-.2-2.9.8.8-2.8-.2-.3a9.8 9.8 0 0 1 7.8-15.6Zm5.3 12c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1l-.9 1c-.2.2-.3.2-.6.1-1.6-.8-2.7-1.4-3.8-3.2-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.9 1-1.2 2.2-.8 3.6.5 1.6 1.6 3.2 3.1 4.5 2.1 1.9 4 2.4 5.4 2.3.9-.1 1.9-.6 2.2-1.4.2-.5.2-1 .1-1.1l-.2-.2Z" fill="#ffffff"/>
  <text x="132" y="572" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="22" font-weight="700" letter-spacing="1.5" fill="#ffffff">ORDER ON WHATSAPP</text>

  <text x="1128" y="576" text-anchor="end" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="22" font-weight="600" fill="#9a9aa2">socialslay.me</text>
</svg>`;

const output = path.join(root, "public", "og-image.png");
const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
await writeFile(output, png);
console.log(`Wrote ${output} (${(png.length / 1024).toFixed(1)} kB)`);
