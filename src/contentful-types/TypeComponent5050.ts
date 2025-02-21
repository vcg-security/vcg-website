import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeComponentAccordionSkeleton } from "./TypeComponentAccordion";
import type { TypeComponentCarouselSkeleton } from "./TypeComponentCarousel";
import type { TypeComponentRichImageSkeleton } from "./TypeComponentRichImage";
import type { TypeComponentRichTextSkeleton } from "./TypeComponentRichText";

export interface TypeComponent5050Fields {
  internalName: EntryFieldTypes.Symbol;
  content: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<
      | TypeComponentAccordionSkeleton
      | TypeComponentCarouselSkeleton
      | TypeComponentRichImageSkeleton
      | TypeComponentRichTextSkeleton
    >
  >;
}

export type TypeComponent5050Skeleton = EntrySkeletonType<
  TypeComponent5050Fields,
  "component5050"
>;
export type TypeComponent5050<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeComponent5050Skeleton, Modifiers, Locales>;
