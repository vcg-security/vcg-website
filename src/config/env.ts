export const env = {
  isProduction: process.env.VERCEL_ENV === "production",
  X_CONTENTFUL_SPACE_ID: process.env.X_CONTENTFUL_SPACE_ID || "",
  X_CONTENTFUL_PREVIEW_TOKEN: process.env.X_CONTENTFUL_PREVIEW_TOKEN || "",
  X_CONTENTFUL_LIVE_TOKEN: process.env.X_CONTENTFUL_LIVE_TOKEN || "",
  X_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN:
    process.env.X_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN || "",
};
