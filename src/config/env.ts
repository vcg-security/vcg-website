if (!process.env.X_CONTENTFUL_SPACE_ID || !process.env.X_CONTENTFUL_TOKEN) {
  throw new Error(
    "Missing required environment variables. Please check: X_CONTENTFUL_SPACE_ID, X_CONTENTFUL_TOKEN"
  );
}

export const env = {
  isProduction: process.env.VERCEL_ENV === "production",
  X_CONTENTFUL_SPACE_ID: process.env.X_CONTENTFUL_SPACE_ID,
  X_CONTENTFUL_TOKEN: process.env.X_CONTENTFUL_TOKEN,
  X_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN:
    process.env.X_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN || "",
};
