import { Entry } from "contentful";
import { TypeComponentImageSkeleton } from "@/contentful-types";
import Image from "next/image";

interface Props {
  fields: Entry<
    TypeComponentImageSkeleton,
    "WITHOUT_UNRESOLVABLE_LINKS",
    string
  >["fields"];
}

export function ComponentImage({ fields }: Props) {
  const image = fields.image;

  return (
    <Image
      src={image?.fields.file?.url || ""}
      alt={image?.fields.title || ""}
      width={500}
      height={500}
      className="aspect-square w-full"
    />
  );
}
