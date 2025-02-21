import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePagesFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    seoDescription?: EntryFieldTypes.Text;
    seoKeywords?: EntryFieldTypes.Symbol;
    seoFollow: EntryFieldTypes.Boolean;
    seoIndex: EntryFieldTypes.Boolean;
    blocks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypePagesSkeleton = EntrySkeletonType<TypePagesFields, "pages">;
export type TypePages<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePagesSkeleton, Modifiers, Locales>;
