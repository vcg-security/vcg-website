import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeHeaderMenuSubItemFields {
  name: EntryFieldTypes.Symbol;
  url: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Symbol;
}

export type TypeHeaderMenuSubItemSkeleton = EntrySkeletonType<
  TypeHeaderMenuSubItemFields,
  "headerMenuSubItem"
>;
export type TypeHeaderMenuSubItem<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeHeaderMenuSubItemSkeleton, Modifiers, Locales>;
