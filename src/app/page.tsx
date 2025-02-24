import { Blocks } from "@/components/Blocks";
import { contentfulClient } from "@/config/contentful";
import { TypePagesSkeleton } from "@/contentful-types";

export default async function Home() {
  const entries = await contentfulClient.getEntries<TypePagesSkeleton>({
    content_type: "pages",
    "fields.slug": "home",
  });

  const page = entries.items[0];
  const blocks = page?.fields.blocks || [];

  return <Blocks blocks={blocks} />;
}
