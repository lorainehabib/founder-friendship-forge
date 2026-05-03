import { copyFile, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const routes = ["/approche", "/situations", "/a-propos", "/mentions-legales"];

const distDir = resolve(process.cwd(), "dist");
const indexFile = resolve(distDir, "index.html");

for (const route of routes) {
  const routeDir = resolve(distDir, route.slice(1));
  await mkdir(routeDir, { recursive: true });
  await copyFile(indexFile, resolve(routeDir, "index.html"));
}

