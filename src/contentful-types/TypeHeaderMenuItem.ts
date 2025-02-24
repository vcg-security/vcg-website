import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHeaderMenuSubItemSkeleton } from "./TypeHeaderMenuSubItem";

export interface TypeHeaderMenuItemFields {
    name: EntryFieldTypes.Symbol;
    url?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
    subItems?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHeaderMenuSubItemSkeleton>>;
}

export type TypeHeaderMenuItemSkeleton = EntrySkeletonType<TypeHeaderMenuItemFields, "headerMenuItem">;
export type TypeHeaderMenuItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeaderMenuItemSkeleton, Modifiers, Locales>;
