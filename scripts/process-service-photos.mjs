import sharp from "sharp";
import { readdirSync, mkdirSync, existsSync } from "fs";
import path from "path";

const SRC_ROOT = "C:/ArtsCode/Projetos/serenari-spa-fotos-novas";
const OUT_ROOT = "C:/ArtsCode/Projetos/serenari-spa/public/services";

const MANIFEST = [
  { slug: "massagem-relaxante", folder: "Massagem Relaxante" },
  { slug: "massagem-terapeutica", folder: "Massagem Terapêutica" },
  { slug: "massagem-localizada", folder: "Massagem Localizada" },
  { slug: "massagem-desportiva", folder: "Massagem Desportiva" },
  { slug: "drenagem-corporal", folder: "Drenagem Linfática Corporal" },
  { slug: "pedras-quentes", folder: "Pedras Quentes" },
  { slug: "reflexologia-podal", folder: "Reflexologia Podal" },
  { slug: "shiatsu", folder: "Shiatsu" },
  { slug: "drenagem-facial", folder: "Drenagem Linfática Facial" },
  { slug: "revitalizacao-facial", folder: "Revitalização Facial" },
  { slug: "liberacao-miofascial", folder: "Liberação Miofascial" },
];

const MAX_WIDTH = 1600;
const JPEG_QUALITY = 78;

function listSourceFiles(folder) {
  const dir = path.join(SRC_ROOT, folder);
  return readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|heic)$/i.test(f))
    .filter((f) => !f.includes("(1)")) // drop iOS duplicate exports
    .sort()
    .map((f) => path.join(dir, f));
}

async function processOne(srcPath, outPath) {
  const image = sharp(srcPath).rotate();
  const meta = await image.metadata();
  const resize = meta.width && meta.width > MAX_WIDTH ? { width: MAX_WIDTH } : {};
  await image.resize(resize).jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(outPath);
  return sharp(outPath).metadata();
}

async function main() {
  const result = {};
  for (const { slug, folder } of MANIFEST) {
    const files = listSourceFiles(folder);
    const outDir = path.join(OUT_ROOT, slug);
    if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

    const entries = [];
    for (let i = 0; i < files.length; i++) {
      const outName = `${String(i + 1).padStart(2, "0")}.jpg`;
      const outPath = path.join(outDir, outName);
      const meta = await processOne(files[i], outPath);
      entries.push({
        src: `/services/${slug}/${outName}`,
        width: meta.width,
        height: meta.height,
        source: path.basename(files[i]),
      });
      console.log(`${slug}/${outName} <- ${path.basename(files[i])} (${meta.width}x${meta.height})`);
    }
    result[slug] = entries;
  }
  console.log("\n\n=== JSON ===");
  console.log(JSON.stringify(result, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
