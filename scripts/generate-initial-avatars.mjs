import sharp from "sharp";
import { mkdirSync, existsSync } from "fs";

const OUT_DIR = "C:/ArtsCode/Projetos/serenari-spa/public/avatars";
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const COLORS = ["#225627", "#a24f24"];

const PEOPLE = [
  { slug: "thauani-cris", initial: "T" },
  { slug: "dyana-dyh", initial: "D" },
  { slug: "gabrielle-fernandes", initial: "G" },
  { slug: "junior-nascimento", initial: "J" },
  { slug: "amanda-fernandes", initial: "A" },
  { slug: "maxwell-santos", initial: "M" },
  { slug: "fernando-comitre", initial: "F" },
];

async function main() {
  for (let i = 0; i < PEOPLE.length; i++) {
    const { slug, initial } = PEOPLE[i];
    const color = COLORS[i % COLORS.length];
    const svg = `
      <svg width="144" height="144" xmlns="http://www.w3.org/2000/svg">
        <circle cx="72" cy="72" r="72" fill="${color}"/>
        <text x="72" y="93" font-family="Georgia, serif" font-size="60" fill="#ffffff"
          text-anchor="middle" font-weight="700">${initial}</text>
      </svg>`;
    const outPath = `${OUT_DIR}/${slug}.png`;
    await sharp(Buffer.from(svg)).png().toFile(outPath);
    console.log("wrote", outPath);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
