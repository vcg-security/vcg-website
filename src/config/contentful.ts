import { createClient as createContentful } from "contentful";

const env = process.env.VERCEL_ENV || "";
const deliveryAccessToken =
  process.env.X_CONTENTFUL_DELIVERY_ACCESS_TOKEN || "";
const previewAccessToken = process.env.X_CONTENTFUL_PREVIEW_ACCESS_TOKEN || "";
const spaceId = process.env.X_CONTENTFUL_SPACE_ID || "";

export const isProduction = env === "production";

export const contentfulClient = createContentful({
  space: spaceId,
  accessToken: isProduction ? deliveryAccessToken : previewAccessToken,
  host: isProduction ? "cdn.contentful.com" : "preview.contentful.com",
}).withoutUnresolvableLinks;
