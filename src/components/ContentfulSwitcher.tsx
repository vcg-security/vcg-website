import { EntrySkeletonType } from "contentful";
import { Entry } from "contentful";
import { ComponentRichText } from "./contentful/componentRichText";

type ContentfulBlockType =
  | Entry<EntrySkeletonType, "WITHOUT_UNRESOLVABLE_LINKS", string>
  | undefined;

interface ContentfulBlockProps {
  block: ContentfulBlockType;
}

function ContentfulBlock({ block }: ContentfulBlockProps) {
  switch (block?.sys.contentType.sys.id) {
    case "componentRichText":
      return <ComponentRichText block={block} />;
    default:
      return null;
  }
}

interface Props {
  blocks: ContentfulBlockType[];
}
export function ContentfulBlocks({ blocks }: Props) {
  return (
    <>
      {blocks.map((block) => (
        <ContentfulBlock key={block?.sys.id} block={block} />
      ))}
    </>
  );
}
