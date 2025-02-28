import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";

export interface TypePageBlogPostFields {
  internalName: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  publishedDate: EntryFieldTypes.Date;
  title: EntryFieldTypes.Symbol;
  shortDescription?: EntryFieldTypes.Text;
  featuredImage: EntryFieldTypes.AssetLink;
  content: EntryFieldTypes.RichText;
  relatedBlogPosts?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypePageBlogPostSkeleton>
  >;
}

export type TypePageBlogPostSkeleton = EntrySkeletonType<
  TypePageBlogPostFields,
  "pageBlogPost"
>;
export type TypePageBlogPost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypePageBlogPostSkeleton, Modifiers, Locales>;
