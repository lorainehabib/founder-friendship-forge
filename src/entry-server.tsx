import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes, AppShell } from "./App";

export { prerenderRoutes } from "./seo-routes";

export const render = (url: string) =>
  renderToString(
    <AppShell>
      <StaticRouter location={url} basename={import.meta.env.BASE_URL}>
        <AppRoutes />
      </StaticRouter>
    </AppShell>,
  );
