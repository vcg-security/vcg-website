import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeComponentImageFields {
    internalName: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
}

export type TypeComponentImageSkeleton = EntrySkeletonType<TypeComponentImageFields, "componentImage">;
export type TypeComponentImage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentImageSkeleton, Modifiers, Locales>;
