import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const source =
  process.env.PROOFS_SOURCE ??
  "C:/Users/Bilal/Documents/Codex/2026-06-14/files-mentioned-by-the-user-socialslay/work/socialslay-source/bilal-shares.github.io-main/Proofs";
const output = path.resolve("public/proofs");
const thumbDir = path.join(output, "thumb");
const fullDir = path.join(output, "full");

await fs.mkdir(thumbDir, { recursive: true });
await fs.mkdir(fullDir, { recursive: true });

const files = (await fs.readdir(source))
  .filter((file) => /^proof\d+\.jpg$/i.test(file))
  .sort((a, b) => Number(a.match(/\d+/)?.[0]) - Number(b.match(/\d+/)?.[0]));

await Promise.all(
  files.flatMap((file) => {
    const number = Number(file.match(/\d+/)?.[0]);
    const input = path.join(source, file);
    const name = `proof-${String(number).padStart(3, "0")}.webp`;

    return [
      sharp(input)
        .resize({ width: 480, withoutEnlargement: true })
        .webp({ quality: 66, effort: 5 })
        .toFile(path.join(thumbDir, name)),
      sharp(input)
        .resize({ width: 900, withoutEnlargement: true })
        .webp({ quality: 78, effort: 5 })
        .toFile(path.join(fullDir, name)),
    ];
  }),
);

const ogSvg = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
        <stop stop-color="#0A0F1F"/>
        <stop offset="1" stop-color="#121A2E"/>
      </linearGradient>
      <radialGradient id="glow">
        <stop stop-color="#7C3AED" stop-opacity=".8"/>
        <stop offset="1" stop-color="#7C3AED" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <circle cx="1030" cy="80" r="420" fill="url(#glow)"/>
    <circle cx="210" cy="600" r="320" fill="#06B6D4" opacity=".12"/>
    <text x="84" y="145" fill="#A8B2D1" font-family="Arial" font-size="22" letter-spacing="8">SOCIAL GROWTH, DIRECTED.</text>
    <text x="78" y="330" fill="white" font-family="Arial" font-size="112" font-weight="800">SOCIALSLAY</text>
    <text x="84" y="415" fill="#A8B2D1" font-family="Arial" font-size="34">Premium social growth for brands, creators and agencies.</text>
    <rect x="84" y="485" width="290" height="68" rx="34" fill="#5B5CF0"/>
    <text x="133" y="529" fill="white" font-family="Arial" font-size="24" font-weight="700">START GROWING</text>
  </svg>
`);

await sharp(ogSvg).png().toFile(path.resolve("public/og-image.png"));
console.log(`Optimized ${files.length} proofs.`);
