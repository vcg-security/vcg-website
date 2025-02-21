import { createClient as createContentful } from "contentful";
import { env } from "./env";

const space = env.X_CONTENTFUL_SPACE_ID;
const accessToken = env.isProduction
  ? env.X_CONTENTFUL_LIVE_TOKEN
  : env.X_CONTENTFUL_PREVIEW_TOKEN;
const host = env.isProduction ? "cdn.contentful.com" : "preview.contentful.com";

export const contentfulClient = createContentful({
  space,
  accessToken,
  host,
}).withoutUnresolvableLinks;
