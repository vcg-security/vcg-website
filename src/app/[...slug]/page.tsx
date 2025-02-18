import { ContentfulBlocks } from "@/components/ContentfulSwitcher";
import { contentfulClient } from "@/config/contentful";
import { TypePagesSkeleton } from "@/contentful-types";
import { notFound } from "next/navigation";

interface Params {
  slug: string;
}
interface Props {
  params: Promise<Params>;
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const entries = await contentfulClient.getEntries<TypePagesSkeleton>({
    content_type: "pages",
    "fields.slug": slug,
  });

  const page = entries.items[0];
  const blocks = page?.fields.blocks || [];

  if (!page) {
    notFound();
  }

  return (
    <>
      <ContentfulBlocks blocks={blocks} />
    </>
  );
}
