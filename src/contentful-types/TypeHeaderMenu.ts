import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHeaderMenuItemSkeleton } from "./TypeHeaderMenuItem";

export interface TypeHeaderMenuFields {
    internalName: EntryFieldTypes.Symbol;
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHeaderMenuItemSkeleton>>;
}

export type TypeHeaderMenuSkeleton = EntrySkeletonType<TypeHeaderMenuFields, "headerMenu">;
export type TypeHeaderMenu<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeaderMenuSkeleton, Modifiers, Locales>;
