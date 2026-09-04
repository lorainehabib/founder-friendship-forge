import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const siteUrl = "https://lorainehabib.com";
const routes = [
  {
    path: "/",
    title: "Loraine Habib — Coach de fondateurs | Relation entre cofondateurs",
    description:
      "La relation entre fondateurs, ça se travaille. J'accompagne les cofondateurs pour que leur association tienne et avance, dès les premiers signes de tension.",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    path: "/approche/",
    title: "Approche — Loraine Habib | Travailler la relation",
    description:
      "Travailler la relation, avant d'en avoir besoin : repérer les inconforts avant qu'ils ne deviennent des tensions.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/offres/",
    title: "Offres — Loraine Habib | Trois façons de travailler la relation",
    description:
      "S'associer, entretenir la relation, débloquer une tension : trois formats d'accompagnement pour fondateurs, selon là où vous en êtes.",
    changefreq: "weekly",
    priority: "0.9",
  },
  {
    path: "/situations/",
    title: "Situations — Loraine Habib | Quelques exemples d'accompagnements",
    description:
      "Quatre situations réelles d'accompagnement de fondateurs, avant, pendant et après l'installation d'une tension entre associés.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    path: "/a-propos/",
    title: "À propos — Loraine Habib",
    description:
      "Ancienne Chief of Staff du CEO de BlaBlaCar et thérapeute formée à l'AEMD : deux regards à la fois pour travailler la relation entre associés.",
    changefreq: "monthly",
    priority: "0.7",
  },
  {
    path: "/faire-le-point/",
    title: "Le point sur votre association — Loraine Habib",
    description:
      "En 20 minutes, faites le point sur votre association : un questionnaire pour évaluer votre niveau d'inconfort, puis une grille d'observation pour y voir plus clair.",
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    path: "/blog/",
    title: "L'angle mort — Loraine Habib",
    description:
      "Une lettre sur ce qui empêche les dirigeants d'avancer.",
    changefreq: "weekly",
    priority: "0.7",
  },
  {
    path: "/mentions-legales/",
    title: "Mentions légales — Loraine Habib | Coaching fondateurs",
    description:
      "Mentions légales, éditeur du site, RGPD et hébergement de lorainehabib.com, spécialisé en accompagnement de fondateurs.",
    changefreq: "yearly",
    priority: "0.3",
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
  if (route.path === "/") continue;
  const routeDir = resolve(distDir, route.path.slice(1));
  await mkdir(routeDir, { recursive: true });
  await writeFile(resolve(routeDir, "index.html"), updateHtml(route), "utf8");
}

const lastmod = new Date().toISOString().slice(0, 10);
const sitemapBody = routes
  .map((route) =>
    [
      "  <url>",
      `    <loc>${siteUrl}${route.path}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      `    <changefreq>${route.changefreq}</changefreq>`,
      `    <priority>${route.priority}</priority>`,
      "  </url>",
    ].join("\n"),
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapBody}
</urlset>
`;

await writeFile(resolve(distDir, "sitemap.xml"), sitemap, "utf8");

