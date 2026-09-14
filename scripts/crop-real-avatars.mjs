import sharp from "sharp";

const SRC_DIR = "C:/ArtsCode/Projetos/serenari-spa-fotos-novas/Avaliações";
const OUT_DIR = "C:/ArtsCode/Projetos/serenari-spa/public/avatars";

const CROPS = [
  { file: "IMG_5127.PNG", out: "thauani-cris.png", left: 107, top: 70, size: 38 },
  { file: "IMG_5128.PNG", out: "dyana-dyh.png", left: 155, top: 35, size: 100 },
  { file: "IMG_5129.PNG", out: "gabrielle-fernandes.png", left: 155, top: 35, size: 100 },
  { file: "IMG_5131.PNG", out: "amanda-fernandes.png", left: 85, top: 68, size: 82 },
];

async function main() {
  for (const { file, out, left, top, size } of CROPS) {
    await sharp(`${SRC_DIR}/${file}`)
      .extract({ left, top, width: size, height: size })
      .resize(144, 144)
      .png()
      .toFile(`${OUT_DIR}/${out}`);
    console.log("wrote", out);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
