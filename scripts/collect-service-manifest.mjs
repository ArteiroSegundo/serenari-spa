import sharp from "sharp";
import { readdirSync } from "fs";
import path from "path";

const ROOT = "C:/ArtsCode/Projetos/serenari-spa/public/services";

async function main() {
  const slugs = readdirSync(ROOT).sort();
  const result = {};
  for (const slug of slugs) {
    const dir = path.join(ROOT, slug);
    const files = readdirSync(dir).filter((f) => f.endsWith(".jpg")).sort();
    const entries = [];
    for (const f of files) {
      const meta = await sharp(path.join(dir, f)).metadata();
      entries.push({ src: `/services/${slug}/${f}`, width: meta.width, height: meta.height });
    }
    result[slug] = entries;
  }
  console.log(JSON.stringify(result, null, 2));
}

main();
