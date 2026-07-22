import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "images");

// Every source photo is a near-perfect square (~3625x3625) social/Amazon ad
// tile with headline text baked in edge-to-edge. Resizing keeps that square
// shape -- components must render them in aspect-square boxes (object-cover
// on a square-into-square container never crops) rather than forcing them
// into portrait/landscape boxes, which was cutting the baked-in text off.
//
// The raw source files below were deleted from the project root after this
// script ran successfully once (public/images/ already has the resized
// output committed). This script is kept for reference/reproducibility --
// re-running it requires the originals to be dropped back into the root.
const jobs = [
  { src: "PRODUCT RENDERING.jpg", out: "product-cutout.jpg", width: 1400 },
  { src: "K9 MultiBenefit - WITHOUT PRICES.jpg", out: "product-infographic-benefits.jpg", width: 1100 },
  { src: "primo1.jpg", out: "hero-dog-with-supplement.jpg", width: 1000 },
  { src: "Primo1b.jpg", out: "lid-off-benefits-burst.jpg", width: 900 },
  { src: "primo2.jpg", out: "doberman-stronger-joints.jpg", width: 800 },
  { src: "Primo2 (1).jpg", out: "daily-all-round-support.jpg", width: 800 },
  { src: "primo3.jpg", out: "rottweiler-extra-paw.jpg", width: 900 },
  { src: "Primo3 (1).jpg", out: "lifestyle-feeding-dog-indoors.jpg", width: 800 },
  { src: "Primo4 (1).jpg", out: "lifestyle-walking-dog-park.jpg", width: 800 },
  { src: "primo4.jpg", out: "health-upgrade-treat-time.jpg", width: 800 },
  { src: "Primo5 (1).jpg", out: "immunity-energy-mobility-support.jpg", width: 800 },
  { src: "primo5 2.jpg", out: "boost-immunity-energy-vitality.jpg", width: 800 },
  { src: "Primo6.jpg", out: "cane-corso-portrait-boost-immunity.jpg", width: 800 },
  { src: "Primo7.jpg", out: "cane-corso-extra-paw-support.jpg", width: 800 },
  { src: "Primo8.jpg", out: "rottweiler-lab-health-upgrade.jpg", width: 800 },
  { src: "Primo9.jpg", out: "dog-pack-happy-healthy-life.jpg", width: 800 },
  { src: "Primo10.jpg", out: "doberman-love-question.jpg", width: 800 },
];

const run = async () => {
  for (const job of jobs) {
    const srcPath = path.join(root, job.src);
    const outPath = path.join(outDir, job.out);
    await sharp(srcPath)
      .resize({ width: job.width, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(outPath);
    console.log(`${job.src} -> ${job.out}`);
  }
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
