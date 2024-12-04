import { apiReference } from "@scalar/hono-api-reference";

import { AppOpenAPI } from "@/lib/types";

import packageJSON from "../../package.json" with { type: "json" };

export const configureOpenAPI = (app: AppOpenAPI) => {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "Tasks API",
    },
  });

  app.get(
    "/reference",
    apiReference({
      defaultHttpClient: {
        targetKey: "javascript",
        clientKey: "fetch",
      },
      spec: {
        url: "/doc",
      },
    })
  );
};
