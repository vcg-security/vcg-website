import { Entry, EntrySkeletonType } from "contentful";
import { Container } from "../Container";

interface Props {
  fields: Entry<
    EntrySkeletonType,
    "WITHOUT_UNRESOLVABLE_LINKS",
    string
  >["fields"];
}

export function Component5050({ fields }: Props) {
  return (
    <section>
      <Container className="grid grid-cols-2 gap-4">
        <div>{/* <ContentfulBlock block={fields} /> */}</div>
        <div>2</div>
      </Container>
    </section>
  );
}
