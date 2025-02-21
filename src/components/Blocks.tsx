import { EntrySkeletonType } from "contentful";
import { Entry } from "contentful";
import { ComponentRichText } from "./contentful/componentRichText";
import { ComponentAccordion } from "./contentful/componentAccordion";
import { Component5050 } from "./contentful/component5050";
type ContentfulBlockType =
  | Entry<EntrySkeletonType, "WITHOUT_UNRESOLVABLE_LINKS", string>
  | undefined;

interface ContentfulBlockProps {
  block: ContentfulBlockType;
}

function ContentfulBlock({ block }: ContentfulBlockProps) {
  switch (block?.sys?.contentType?.sys?.id) {
    case "componentRichText":
      return <ComponentRichText fields={block?.fields} />;
    case "componentAccordion":
      return <ComponentAccordion fields={block?.fields} />;
    case "component5050":
      return <Component5050 fields={block?.fields} />;
    default:
      return null;
  }
}

interface Props {
  blocks: ContentfulBlockType[];
}
export function Blocks({ blocks }: Props) {
  return (
    <main className="">
      {blocks.map((block) => (
        <ContentfulBlock key={block?.sys.id} block={block} />
      ))}
    </main>
  );
}
