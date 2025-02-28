import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeComponentImageFields {
  internalName: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  alt?: EntryFieldTypes.Symbol;
  rounded?: EntryFieldTypes.Boolean;
  bordered?: EntryFieldTypes.Boolean;
  aspectSquare?: EntryFieldTypes.Boolean;
  aspectVideo?: EntryFieldTypes.Boolean;
  width?: EntryFieldTypes.Integer;
  height?: EntryFieldTypes.Integer;
}

export type TypeComponentImageSkeleton = EntrySkeletonType<
  TypeComponentImageFields,
  "componentImage"
>;
export type TypeComponentImage<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeComponentImageSkeleton, Modifiers, Locales>;
