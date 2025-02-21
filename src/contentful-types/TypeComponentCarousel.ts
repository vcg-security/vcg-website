import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentCarouselFields {
    images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeComponentCarouselSkeleton = EntrySkeletonType<TypeComponentCarouselFields, "componentCarousel">;
export type TypeComponentCarousel<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentCarouselSkeleton, Modifiers, Locales>;
