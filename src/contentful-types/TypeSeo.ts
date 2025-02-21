import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSeoFields {
    internalName: EntryFieldTypes.Symbol;
    pageTitle: EntryFieldTypes.Symbol;
    pageDescription?: EntryFieldTypes.Text;
    pageKeywords: EntryFieldTypes.Symbol;
    canonicalUrl?: EntryFieldTypes.Symbol;
    follow: EntryFieldTypes.Boolean;
    index: EntryFieldTypes.Boolean;
    shareImages?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypeSeoSkeleton = EntrySkeletonType<TypeSeoFields, "seo">;
export type TypeSeo<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSeoSkeleton, Modifiers, Locales>;
