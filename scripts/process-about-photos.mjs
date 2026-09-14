import sharp from "sharp";
import { mkdirSync, existsSync } from "fs";
import path from "path";

const SRC_DIR = "C:/ArtsCode/Projetos/serenari-spa-fotos-novas/Salas";
const OUT_DIR = "C:/ArtsCode/Projetos/serenari-spa/public/sobre-nos";

const CURATED = [
  { file: "09D59E1F-D447-4079-BE51-A5B06268118E.PNG", alt: "Lounge de espera do Serenari Spa" },
  { file: "F312DF9C-A3CE-41E7-8062-45769D86E343.png", alt: "Recepção do Serenari Spa" },
  { file: "IMG_0101.jpg", alt: "Estação de café e boas-vindas" },
  { file: "IMG_1906.jpg", alt: "Espaço de espera com logo Serenari Spa" },
  { file: "IMG_0115.jpg", alt: "Sala de massagem preparada" },
  { file: "IMG_0117.jpg", alt: "Detalhe da bandeja de boas-vindas" },
  { file: "IMG_9971.jpg", alt: "Sala de massagem individual" },
  { file: "IMG_9975.jpg", alt: "Óleos essenciais e flores" },
  { file: "IMG_9992.jpg", alt: "Bandeja de boas-vindas com frutas" },
  { file: "IMG_4211.jpg", alt: "Sala de massagem individual preparada" },
  { file: "IMG_4219.jpg", alt: "Sala de massagem dupla, vista com espelho" },
  { file: "IMG_4230.jpg", alt: "Sala de massagem dupla preparada" },
];

const MAX_WIDTH = 1600;

async function main() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
  const result = [];
  for (let i = 0; i < CURATED.length; i++) {
    const { file, alt } = CURATED[i];
    const outName = `${String(i + 1).padStart(2, "0")}.jpg`;
    const outPath = path.join(OUT_DIR, outName);
    const image = sharp(path.join(SRC_DIR, file)).rotate();
    const meta = await image.metadata();
    const resize = meta.width && meta.width > MAX_WIDTH ? { width: MAX_WIDTH } : {};
    const info = await image.resize(resize).jpeg({ quality: 80, mozjpeg: true }).toFile(outPath);
    result.push({ img: `/sobre-nos/${outName}`, alt, width: info.width, height: info.height });
    console.log(outName, "<-", file, `${info.width}x${info.height}`);
  }
  console.log("\n=== JSON ===");
  console.log(JSON.stringify(result, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
