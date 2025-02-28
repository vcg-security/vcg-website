/* eslint-disable @typescript-eslint/no-explicit-any */
import { EntrySkeletonType } from "contentful";
import { Entry } from "contentful";
import { ComponentRichText } from "./contentful/componentRichText";
import { ComponentAccordion } from "./contentful/componentAccordion";
import { Component5050 } from "./contentful/component5050";
import { ComponentCarouselGallery } from "./contentful/componentCarouselGallery";
import { ComponentImage } from "./contentful/componentImage";

type ContentfulBlockType =
  | Entry<EntrySkeletonType, "WITHOUT_UNRESOLVABLE_LINKS", string>
  | undefined;

interface ContentfulBlockProps {
  block: ContentfulBlockType;
}

export function ContentfulBlock({ block }: ContentfulBlockProps) {
  switch (block?.sys?.contentType?.sys?.id) {
    case "componentRichText":
      return <ComponentRichText fields={block?.fields} />;
    case "componentImage":
      return <ComponentImage fields={block?.fields as any} />;
    case "componentAccordion":
      return <ComponentAccordion fields={block?.fields} />;
    case "component5050":
      return <Component5050 fields={block?.fields as any} />;
    case "componentCarouselGallery":
      return <ComponentCarouselGallery fields={block?.fields as any} />;
    default:
      return null;
  }
}

interface Props {
  blocks: ContentfulBlockType[];
}
export function Blocks({ blocks }: Props) {
  return (
    <main>
      {blocks.map((block) => (
        <ContentfulBlock key={block?.sys.id} block={block} />
      ))}
    </main>
  );
}
