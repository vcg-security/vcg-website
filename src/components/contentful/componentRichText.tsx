import { Entry, EntrySkeletonType } from "contentful";
import { Document, Block, Text } from "@contentful/rich-text-types";
import { cn } from "@/lib/utils";
import { Typography } from "../Typography";

interface Props {
  fields: Entry<
    EntrySkeletonType,
    "WITHOUT_UNRESOLVABLE_LINKS",
    string
  >["fields"];
}

export function ComponentRichText({ fields }: Props) {
  const content = (fields.text as Document)?.content;

  const renderNode = (node: Block) => {
    switch (node.nodeType) {
      case "heading-1":
        return (
          <Typography variant="h1" className="mb-8">
            {(node.content[0] as Text).value}
          </Typography>
        );
      case "heading-2":
        return (
          <Typography variant="h2">
            {(node.content[0] as Text).value}
          </Typography>
        );
      case "heading-3":
        return (
          <Typography variant="h3">
            {(node.content[0] as Text).value}
          </Typography>
        );
      case "heading-4":
        return (
          <Typography variant="h4">
            {(node.content[0] as Text).value}
          </Typography>
        );

      case "paragraph":
        const marks = (node.content[0] as Text).marks;
        const text = (node.content[0] as Text).value;
        const isBold = marks?.some((mark) => mark.type === "bold");
        const isItalic = marks?.some((mark) => mark.type === "italic");

        return (
          <Typography
            variant="p"
            className={cn("mb-4", isBold && "font-bold", isItalic && "italic")}
          >
            {text}
          </Typography>
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
