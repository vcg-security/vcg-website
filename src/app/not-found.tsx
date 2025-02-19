import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex py-32 w-full items-center justify-center">
      <Image
        src="https://images.ctfassets.net/gsfj8g0zut06/1aHsaVp3O60ItoBHHyZCjX/9ee1181dade8fb3f385e4a907664ca4b/5203299.jpg"
        alt="404"
        width={800}
        height={800}
        className="w-[400px] h-[400px]"
      />
    </div>
  );
}
