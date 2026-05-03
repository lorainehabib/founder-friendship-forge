// Convertit chaque .jpg/.jpeg/.png de src/assets en .webp.
// Réutilise le .webp existant s'il est plus récent que la source (skip).
// Le build s'arrête en erreur si une conversion échoue.

import { readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = resolve(__dirname, "..", "src", "assets");
const QUALITY = 85;
const SOURCE_EXTS = new Set([".jpg", ".jpeg", ".png"]);

const isOlderThan = async (path, referencePath) => {
  if (!existsSync(path)) return true;
  const [a, b] = await Promise.all([stat(path), stat(referencePath)]);
  return a.mtimeMs < b.mtimeMs;
};

const main = async () => {
  if (!existsSync(ASSETS_DIR)) {
    console.log(`[webp] Pas de dossier ${ASSETS_DIR}, rien à faire.`);
    return;
  }

  const entries = await readdir(ASSETS_DIR);
  const sources = entries.filter((f) => SOURCE_EXTS.has(extname(f).toLowerCase()));

  if (sources.length === 0) {
    console.log("[webp] Aucune image source à convertir.");
    return;
  }

  let converted = 0;
  let skipped = 0;

  for (const file of sources) {
    const sourcePath = join(ASSETS_DIR, file);
    const targetPath = join(
      ASSETS_DIR,
      file.replace(/\.(jpe?g|png)$/i, ".webp"),
    );

    const needsConversion = await isOlderThan(targetPath, sourcePath);
    if (!needsConversion) {
      skipped += 1;
      continue;
    }

    await sharp(sourcePath)
      .webp({ quality: QUALITY })
      .toFile(targetPath);
    converted += 1;
    console.log(`[webp] ${file} -> ${file.replace(/\.(jpe?g|png)$/i, ".webp")}`);
  }

  console.log(`[webp] Terminé. Convertis : ${converted}, à jour : ${skipped}.`);
};

main().catch((err) => {
  console.error("[webp] Échec de la conversion :", err);
  process.exit(1);
});
