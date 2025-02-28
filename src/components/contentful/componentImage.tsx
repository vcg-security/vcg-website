import { Entry } from "contentful";
import { TypeComponentImageSkeleton } from "@/contentful-types";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface Props {
  fields: Entry<
    TypeComponentImageSkeleton,
    "WITHOUT_UNRESOLVABLE_LINKS",
    string
  >["fields"];
}

export function ComponentImage({ fields }: Props) {
  console.log(fields);
  const image = fields.image;
  const alt = fields.alt || "";
  const rounded = fields.rounded || false;
  const bordered = fields.bordered || false;
  const width = fields.width || 500;
  const height = fields.height || 500;
  const aspectSquare = fields.aspectSquare || false;
  const aspectVideo = fields.aspectVideo || false;

  return (
    <div>
      <div
        className={cn(
          "w-full",
          rounded && "rounded-lg p-4",
          bordered && "bg-gray-100"
        )}
      >
        <Image
          src={image?.fields.file?.url || ""}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "w-full",
            rounded && "rounded-lg",
            aspectSquare && "aspect-square",
            aspectVideo && "aspect-video"
          )}
        />
      </div>
    </div>
  );
}
