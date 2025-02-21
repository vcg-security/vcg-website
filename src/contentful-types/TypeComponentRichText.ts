import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeComponentRichTextFields {
  text: EntryFieldTypes.RichText;
}

export type TypeComponentRichTextSkeleton = EntrySkeletonType<
  TypeComponentRichTextFields,
  "componentRichText"
>;
export type TypeComponentRichText<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeComponentRichTextSkeleton, Modifiers, Locales>;
