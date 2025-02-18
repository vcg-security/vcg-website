import { Entry, EntrySkeletonType } from "contentful";
import { Document, Block, Text } from "@contentful/rich-text-types";
import { cn } from "@/lib/utils";

interface Props {
  block: Entry<EntrySkeletonType, "WITHOUT_UNRESOLVABLE_LINKS", string>;
}

export function ComponentRichText({ block }: Props) {
  const content = (block.fields.text as Document)?.content;

  const renderNode = (node: Block) => {
    switch (node.nodeType) {
      case "heading-1":
        return (
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {(node.content[0] as Text).value}
          </h1>
        );
      case "heading-2":
        return (
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {(node.content[0] as Text).value}
          </h2>
        );
      case "paragraph":
        const marks = (node.content[0] as Text).marks;
        const text = (node.content[0] as Text).value;
        const isBold = marks?.some((mark) => mark.type === "bold");
        const isItalic = marks?.some((mark) => mark.type === "italic");

        return (
          <p
            className={cn(
              "leading-7 [&:not(:first-child)]:mt-6",
              isBold && "font-bold",
              isItalic && "italic"
            )}
          >
            {text}
          </p>
        );
      case "unordered-list":
        return (
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            {node.content.map((item, index) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const content = (item as Block).content[0] as any;
              const subContent = content.content;
              const iteme = subContent[0];
              return <li key={index}>{iteme.value}</li>;
            })}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {content.map((node, index) => (
        <div key={index}>{renderNode(node)}</div>
      ))}
    </div>
  );
}
