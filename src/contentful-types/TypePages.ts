import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSeoSkeleton } from "./TypeSeo";

export interface TypePagesFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    seo?: EntryFieldTypes.EntryLink<TypeSeoSkeleton>;
    blocks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypePagesSkeleton = EntrySkeletonType<TypePagesFields, "pages">;
export type TypePages<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePagesSkeleton, Modifiers, Locales>;
