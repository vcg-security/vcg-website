import { Entry, EntrySkeletonType } from "contentful";

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { Accordion } from "../ui/accordion";

interface Props {
  fields: Entry<
    EntrySkeletonType,
    "WITHOUT_UNRESOLVABLE_LINKS",
    string
  >["fields"];
}

export function ComponentAccordion({ fields }: Props) {
  console.log(fields);

  return (
    <div>
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <h2>Accordion Item 1</h2>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
