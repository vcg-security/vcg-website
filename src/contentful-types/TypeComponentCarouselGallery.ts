import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypeComponentCarouselGalleryFields {
  title: EntryFieldTypes.Symbol;
  images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeComponentCarouselGallerySkeleton = EntrySkeletonType<
  TypeComponentCarouselGalleryFields,
  "componentCarouselGallery"
>;
export type TypeComponentCarouselGallery<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeComponentCarouselGallerySkeleton, Modifiers, Locales>;
