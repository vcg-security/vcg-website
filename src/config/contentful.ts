import { createClient as createContentful } from "contentful";
import { env } from "./env";

const space = env.X_CONTENTFUL_SPACE_ID;
const accessToken = env.X_CONTENTFUL_TOKEN;
const host = env.isProduction ? "cdn.contentful.com" : "preview.contentful.com";

export const contentfulClient = createContentful({
  space,
  accessToken,
  host,
}).withoutUnresolvableLinks;
