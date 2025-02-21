import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeComponentAccordionItemFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.RichText;
}

export type TypeComponentAccordionItemSkeleton = EntrySkeletonType<
  TypeComponentAccordionItemFields,
  "componentAccordionItem"
>;
export type TypeComponentAccordionItem<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeComponentAccordionItemSkeleton, Modifiers, Locales>;
