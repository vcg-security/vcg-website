import { createClient as createContentful } from "contentful";
import { env } from "./env";

export const contentfulClient = createContentful({
  space: env.X_CONTENTFUL_SPACE_ID,
  accessToken: env.X_CONTENTFUL_TOKEN,
  host: env.X_CONTENTFUL_HOST,
}).withoutUnresolvableLinks;
