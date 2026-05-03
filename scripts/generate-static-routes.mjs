import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const siteUrl = "https://lorainehabib.com";
const routes = [
  {
    path: "/approche/",
    title: "Approche de coaching — Loraine Habib | Conflits entre cofondateurs",
    description:
      "Une approche de coaching pour fondateurs qui aide à décrypter les tensions entre cofondateurs et à rétablir une relation de travail solide.",
  },
  {
    path: "/situations/",
    title: "Exemples clients — Loraine Habib | Accompagnement de cofondateurs",
    description:
      "Trois situations réelles d'accompagnement de cofondateurs pour débloquer les conflits, clarifier les décisions et relancer la dynamique d'équipe.",
  },
  {
    path: "/a-propos/",
    title: "À propos — Loraine Habib | Coach en relation entre fondateurs",
    description:
      "Le parcours de Loraine Habib entre psychologie et startup pour accompagner la relation entre fondateurs et prévenir les conflits entre cofondateurs.",
  },
  {
    path: "/mentions-legales/",
    title: "Mentions légales — Loraine Habib | Coaching fondateurs",
    description:
      "Mentions légales, éditeur du site, RGPD et hébergement de lorainehabib.com, spécialisé en accompagnement de fondateurs.",
  },
];

const distDir = resolve(process.cwd(), "dist");
const indexFile = resolve(distDir, "index.html");
const indexHtml = await readFile(indexFile, "utf8");

const upsert = (html, pattern, replacement, anchorPattern) => {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace(anchorPattern, `${replacement}\n$&`);
};

const updateHtml = ({ path, title, description }) => {
  const canonical = `${siteUrl}${path}`;

  let html = indexHtml
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${description}" />`);

  html = upsert(
    html,
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${canonical}" />`,
    /<meta property="og:locale" content=".*?" \/>/,
  );

  return html;
};

for (const route of routes) {
  const routeDir = resolve(distDir, route.path.slice(1));
  await mkdir(routeDir, { recursive: true });
  await writeFile(resolve(routeDir, "index.html"), updateHtml(route), "utf8");
}

