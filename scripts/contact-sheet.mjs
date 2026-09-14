import sharp from "sharp";
import { readdirSync } from "fs";
import path from "path";

const [, , folder, outPrefix, perSheetArg] = process.argv;
const perSheet = parseInt(perSheetArg || "9", 10);

const files = readdirSync(folder).filter((f) => /\.(jpe?g|png|heic)$/i.test(f));
files.sort();

const cellW = 360;
const cellH = 480;
const cols = 3;
const labelH = 28;

async function makeSheet(batch, sheetIndex) {
  const rows = Math.ceil(batch.length / cols);
  const canvasW = cellW * cols;
  const canvasH = (cellH + labelH) * rows;

  const composites = [];
  for (let i = 0; i < batch.length; i++) {
    const file = batch[i];
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = col * cellW;
    const y = row * (cellH + labelH);

    const buf = await sharp(path.join(folder, file))
      .rotate()
      .resize(cellW - 8, cellH - 8, { fit: "inside" })
      .jpeg({ quality: 60 })
      .toBuffer();

    composites.push({ input: buf, left: x + 4, top: y + labelH });

    const label = await sharp({
      create: {
        width: cellW,
        height: labelH,
        channels: 3,
        background: { r: 20, g: 20, b: 20 },
      },
    })
      .composite([
        {
          input: Buffer.from(
            `<svg width="${cellW}" height="${labelH}"><text x="4" y="19" font-size="14" fill="white" font-family="monospace">${sheetIndex}.${i} ${file}</text></svg>`
          ),
          left: 0,
          top: 0,
        },
      ])
      .png()
      .toBuffer();
    composites.push({ input: label, left: x, top: y });
  }

  const outPath = `${outPrefix}-${sheetIndex}.jpg`;
  await sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 3,
      background: { r: 255, g: 255, b: 255 },
    },
  })
    .composite(composites)
    .jpeg({ quality: 70 })
    .toFile(outPath);

  console.log("wrote", outPath, "with", batch.length, "images");
}

async function main() {
  for (let i = 0; i * perSheet < files.length; i++) {
    const batch = files.slice(i * perSheet, (i + 1) * perSheet);
    await makeSheet(batch, i);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
