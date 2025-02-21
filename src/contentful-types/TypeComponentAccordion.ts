import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeComponentAccordionItemSkeleton } from "./TypeComponentAccordionItem";

export interface TypeComponentAccordionFields {
    title: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeComponentAccordionItemSkeleton>>;
}

export type TypeComponentAccordionSkeleton = EntrySkeletonType<TypeComponentAccordionFields, "componentAccordion">;
export type TypeComponentAccordion<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeComponentAccordionSkeleton, Modifiers, Locales>;
