/**
 * Génère le PDF remplissable (cases à cocher + grilles) pour Aperçu.
 *
 * Prérequis locaux : pdf-lib et pdfjs-dist (ex. `bun add pdf-lib pdfjs-dist`
 * dans un dossier temporaire, puis lancer ce script avec bun depuis ce dossier,
 * ou les avoir dans node_modules).
 *
 * Chrome headless imprime le HTML, puis des champs AcroForm sont superposés.
 */
import { execFile } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const execFileAsync = promisify(execFile);
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = resolve(root, "scripts/pdf-le-point.html");
const outPath = resolve(root, "public/le-point-sur-votre-association.pdf");
const chrome =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const MM = 72 / 25.4;
const CHECK = 13;
const CELL_H = 52 * MM;

const findAnchors = async (bytes) => {
  const loadingTask = getDocument({
    data: new Uint8Array(bytes),
    useSystemFonts: true,
    isEvalSupported: false,
    disableWorker: true,
  });
  const pdf = await loadingTask.promise;
  const anchors = new Map();

  for (let i = 1; i <= pdf.numPages; i += 1) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    for (const item of content.items) {
      const text = "str" in item ? item.str : "";
      for (const match of text.matchAll(/«([a-z0-9]+)/gi)) {
        const [, , , , x, y] = item.transform;
        anchors.set(match[1], { page: i - 1, x, y, width: item.width ?? 0 });
      }
    }
  }

  return { anchors, pageCount: pdf.numPages };
};

const addFields = async (bytes, anchors) => {
  const pdfDoc = await PDFDocument.load(bytes);
  const form = pdfDoc.getForm();
  const pages = pdfDoc.getPages();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const border = rgb(0.878, 0.835, 0.784);

  const placeCheck = (name, score, loc) => {
    const page = pages[loc.page];
    let group;
    try {
      group = form.getRadioGroup(name);
    } catch {
      group = form.createRadioGroup(name);
    }
    group.addOptionToPage(String(score), page, {
      x: loc.x - 1,
      y: loc.y - 3,
      width: CHECK,
      height: CHECK,
      borderWidth: 0.6,
      borderColor: border,
      backgroundColor: rgb(1, 1, 1),
    });
  };

  for (let q = 1; q <= 11; q += 1) {
    const letters = ["a", "b", "c", "d", "e"];
    for (let s = 0; s <= 4; s += 1) {
      const loc = anchors.get(`q${q}${letters[s]}`);
      if (!loc) {
        throw new Error(`Ancre manquante : q${q}${letters[s]}`);
      }
      placeCheck(`q${q}`, s, loc);
    }
  }

  const placeText = (name, loc, width, height, yOffset = 0) => {
    const field = form.createTextField(name);
    field.enableMultiline();
    field.addToPage(pages[loc.page], {
      x: loc.x - 2,
      y: loc.y - height + 8 + yOffset,
      width,
      height,
      borderWidth: 0,
      backgroundColor: rgb(1, 1, 1),
    });
    field.setFontSize(10);
    field.updateAppearances(font);
  };

  const total = anchors.get("total");
  if (!total) throw new Error("Ancre manquante : total");
  const totalField = form.createTextField("total");
  totalField.addToPage(pages[total.page], {
    x: total.x - 2,
    y: total.y - 8,
    width: 42,
    height: 20,
    borderWidth: 0,
    backgroundColor: rgb(1, 1, 1),
  });
  totalField.setFontSize(12);
  totalField.updateAppearances(font);

  const cellKeys = ["m1a", "m1b", "m1c", "m2a", "m2b", "m2c", "m3a", "m3b", "m3c"];
  for (const key of cellKeys) {
    const loc = anchors.get(key);
    if (!loc) throw new Error(`Ancre manquante : ${key}`);
    const pageWidth = pages[loc.page].getWidth();
    const colW = (pageWidth - 15 * MM * 2) / 3 - 6;
    placeText(key, loc, colW, CELL_H - 8);
  }

  const synth = anchors.get("synth");
  if (!synth) throw new Error("Ancre manquante : synth");
  const synthPage = pages[synth.page];
  const synthW = synthPage.getWidth() - 15 * MM * 2 - 4;
  placeText("synth", synth, synthW, CELL_H - 4);

  try {
    form.updateFieldAppearances(font);
  } catch {
    // Certains champs n'ont pas d'entrée /DA ; les apparences ont déjà été posées.
  }
  pdfDoc.setTitle("Le point sur votre association");
  pdfDoc.setAuthor("Loraine Habib");
  return pdfDoc.save({ updateFieldAppearances: false });
};

const chromePrint = async () => {
  await execFileAsync(chrome, [
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=8000",
    `--print-to-pdf=${outPath}`,
    `file://${htmlPath}`,
  ]);
};

await chromePrint();
const printed = await readFile(outPath);
const { anchors } = await findAnchors(printed);
const fillable = await addFields(printed, anchors);
await writeFile(outPath, fillable);
console.log(`PDF remplissable : ${outPath} (${fillable.length} octets, ${anchors.size} ancres)`);
