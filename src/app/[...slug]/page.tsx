import { Container } from "@/components/Container";
import { ContentfulBlocks } from "@/components/ContentfulSwitcher";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { contentfulClient } from "@/config/contentful";
import { TypePagesSkeleton } from "@/contentful-types";
import { notFound } from "next/navigation";

async function getPageBySlug(slug: string) {
  const entries = await contentfulClient.getEntries<TypePagesSkeleton>({
    content_type: "pages",
    "fields.slug": slug,
    include: 2,
  });

  return entries.items[0];
}

interface Params {
  slug: string;
}
interface Props {
  params: Promise<Params>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const page = await getPageBySlug(slug);
  if (!page) notFound();

  return {
    title: page.fields.title + " | VCG Security",
    description: page.fields.seoDescription,
    openGraph: {
      title: page.fields.title + " | VCG Security",
      description: page.fields.seoDescription,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const page = await getPageBySlug(slug);
  if (!page) notFound();

  const blocks = page?.fields.blocks || [];

  return (
    <main className="space-y-10 my-10">
      <Container>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${page.fields.slug}`}>
                {page.fields.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </Container>
      <ContentfulBlocks blocks={blocks} />
    </main>
  );
}
