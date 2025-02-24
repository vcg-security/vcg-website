"use client";
import { Entry } from "contentful";
import { Container } from "../Container";
import { CarouselContent, CarouselItem } from "../ui/carousel";
import { Carousel } from "../ui/carousel";
import { TypeComponentCarouselGallerySkeleton } from "@/contentful-types";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { contentfulImageUrl } from "@/lib/contentful-image-url";

interface Props {
  fields: Entry<
    TypeComponentCarouselGallerySkeleton,
    "WITHOUT_UNRESOLVABLE_LINKS",
    string
  >["fields"];
}
export function ComponentCarouselGallery({ fields }: Props) {
  const images = fields.images;

  return (
    <section className="bg-gray-100 py-20">
      <Container>
        <h1 className="text-6xl font-bold text-gray-700 mb-20">
          {fields.title}
        </h1>
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-4">
            {images?.map((image) => (
              <CarouselItem
                key={image?.sys.id}
                className="pl-4 lg:basis-1/6 flex items-center justify-center"
              >
                <Image
                  src={contentfulImageUrl(image?.fields?.file?.url)}
                  alt={image?.fields.title || ""}
                  width={100}
                  height={100}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all w-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
}
