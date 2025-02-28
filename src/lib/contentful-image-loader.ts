interface Options {
  src: string;
  width: number;
  quality: number;
}

export default function contentfulLoader(options: Options) {
  const { src, width, quality } = options;

  return `https:${src}?h=${width}&q=${quality || 75}`;
}
