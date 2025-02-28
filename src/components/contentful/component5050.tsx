import { Entry } from "contentful";
import { Container } from "../Container";
import { TypeComponent5050Skeleton } from "@/contentful-types";
import { ContentfulBlock } from "../Blocks";

interface Props {
  fields: Entry<
    TypeComponent5050Skeleton,
    "WITHOUT_UNRESOLVABLE_LINKS",
    string
  >["fields"];
}

export function Component5050({ fields }: Props) {
  const content = fields.content;

  return (
    <section>
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <ContentfulBlock block={content[0]} />
        <ContentfulBlock block={content[1]} />
      </Container>
    </section>
  );
}
