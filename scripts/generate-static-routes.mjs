import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

process.env.NODE_ENV = "production";

const siteUrl = "https://lorainehabib.com";
const serverEntry = pathToFileURL(resolve(process.cwd(), "dist/server/entry-server.js")).href;
const { render, prerenderRoutes: routes } = await import(serverEntry);

const distDir = resolve(process.cwd(), "dist");
const indexFile = resolve(distDir, "index.html");
const indexHtml = await readFile(indexFile, "utf8");

const attr = (value) => value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

const upsert = (html, pattern, replacement, anchorPattern) => {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace(anchorPattern, `${replacement}\n$&`);
};

const updateHtml = ({ path, canonicalPath, title, description, ogImage }) => {
  const canonical = `${siteUrl}${canonicalPath ?? path}`;

  let html = indexHtml
    .replace(/<title>.*?<\/title>/, `<title>${attr(title)}</title>`)
    .replace(/<meta name="description" content=".*?" \/>/, `<meta name="description" content="${attr(description)}" />`)
    .replace(/<link rel="canonical" href=".*?" \/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content=".*?" \/>/, `<meta property="og:title" content="${attr(title)}" />`)
    .replace(/<meta property="og:description" content=".*?" \/>/, `<meta property="og:description" content="${attr(description)}" />`);

  if (ogImage) {
    const image = `${siteUrl}${ogImage}`;
    html = html
      .replace(/<meta property="og:image" content=".*?" \/>/, `<meta property="og:image" content="${image}" />`)
      .replace(/<meta property="og:image:secure_url" content=".*?" \/>/, `<meta property="og:image:secure_url" content="${image}" />`)
      .replace(/<meta property="og:image:width" content=".*?" \/>/, `<meta property="og:image:width" content="1200" />`)
      .replace(/<meta property="og:image:height" content=".*?" \/>/, `<meta property="og:image:height" content="630" />`)
      .replace(/<meta name="twitter:image" content=".*?" \/>/, `<meta name="twitter:image" content="${image}" />`);
  }

  html = upsert(
    html,
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${canonical}" />`,
    /<meta property="og:locale" content=".*?" \/>/,
  );

  return html;
};

for (const route of routes) {
  const appHtml = render(route.path);
  if (appHtml.includes("Cette page n'existe pas.")) {
    throw new Error(`Le prérendu de ${route.path} a produit la page 404. Ajoutez la route dans App.tsx.`);
  }
  if (!indexHtml.includes('<div id="root"></div>')) {
    throw new Error('Le modèle dist/index.html ne contient pas <div id="root"></div>.');
  }
  const html = updateHtml(route).replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  const routeDir = route.path === "/" ? distDir : resolve(distDir, route.path.slice(1));
  await mkdir(routeDir, { recursive: true });
  await writeFile(resolve(routeDir, "index.html"), html, "utf8");
}

const lastmod = new Date().toISOString().slice(0, 10);
const sitemapBody = routes.filter((route) => !route.canonicalPath)
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

const situationsDir = resolve(distDir, "situations");
await mkdir(situationsDir, { recursive: true });
await writeFile(
  resolve(situationsDir, "index.html"),
  `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>L'angle mort · Loraine Habib</title>
    <link rel="canonical" href="${siteUrl}/blog/" />
    <meta http-equiv="refresh" content="0; url=/blog/" />
    <script>location.replace("/blog/");</script>
  </head>
  <body>
    <p><a href="/blog/">L'angle mort</a></p>
  </body>
</html>
`,
  "utf8",
);

await rm(resolve(distDir, "server"), { recursive: true, force: true });
