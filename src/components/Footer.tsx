import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Typography } from "./Typography";
import { Entry } from "contentful";
import { TypeHeaderMenuSkeleton } from "@/contentful-types";
import { Separator } from "./ui/separator";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapIcon,
  PhoneCallIcon,
  YoutubeIcon,
} from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  menu: Entry<
    TypeHeaderMenuSkeleton,
    "WITHOUT_UNRESOLVABLE_LINKS",
    string
  > | null;
}
export function Footer({ menu }: Props) {
  if (!menu) return null;

  const aboutUs = menu.fields.items.find(
    (item) => item?.fields.name === "Nosotros"
  );
  const aboutUsSubItems = aboutUs?.fields.subItems;

  const services = menu.fields.items.find(
    (item) => item?.fields.name === "Servicios"
  );
  const servicesSubItems = services?.fields.subItems;

  return (
    <footer className="bg-black text-white py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 mb-20 mx-10 md:mx-0">
          <div>
            <Link
              href="/"
              className="hover:opacity-80 hover:scale-105 transition-all"
            >
              <Image
                src="//images.ctfassets.net/gsfj8g0zut06/1JhtylnPUef0jQU4CPurCZ/afb8cedf38352040e39575d30813f6ba/Logo-Blanco---Sin-Fondo.webp"
                alt="Logo"
                width={300}
                height={100}
                className="w-52"
              />
            </Link>
            <Typography variant="p">
              En VCG Security entendemos que el cliente y su seguridad son
              nuestra razón de ser.
            </Typography>
          </div>
          <div>
            <Typography variant="h3-underline">Nosotros</Typography>
            <ul className="mt-6 flex flex-col gap-5">
              {aboutUsSubItems?.map((item) => (
                <li key={item?.sys.id}>
                  <Link
                    href={item?.fields.url || ""}
                    className="hover:underline"
                  >
                    {item?.fields.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Typography variant="h3-underline">Servicios</Typography>
            <ul className="mt-6 flex flex-col gap-5">
              {servicesSubItems?.map((item) => (
                <li key={item?.sys.id}>
                  <Link
                    href={item?.fields.url || ""}
                    className="hover:underline"
                  >
                    {item?.fields.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Typography variant="h3-underline">Contacto</Typography>
            <div className="my-5">
              <Typography
                variant="muted"
                className="flex items-center gap-2 text-white/70"
              >
                <PhoneCallIcon className="w-4 h-4" />
                Telefonos
              </Typography>
              <Typography variant="p" className="!mt-0">
                <a href="tel:0998270225" className="hover:underline">
                  099 827 0225
                </a>{" "}
                -{" "}
                <a href="tel:0969117085" className="hover:underline">
                  096 911 7085
                </a>
              </Typography>
            </div>
            <div className="mb-5">
              <Typography
                variant="muted"
                className="flex items-center gap-2 text-white/70"
              >
                <MailIcon className="w-4 h-4" />
                Email
              </Typography>
              <Typography variant="p" className="!mt-0">
                <a
                  href="mailto:info@vcgblindaje.com"
                  className="hover:underline"
                >
                  info@vcgblindaje.com
                </a>
              </Typography>
            </div>
            <div>
              <Typography
                variant="muted"
                className="flex items-center gap-2 text-white/70"
              >
                <MapIcon className="w-4 h-4" />
                Ubicación
              </Typography>
              <Typography variant="p" className="!mt-0">
                <a
                  href="https://goo.gl/maps/1234567890"
                  target="_blank"
                  className="hover:underline"
                >
                  Av. de las Américas 803, Guayaquil. Ecuador
                </a>
              </Typography>
            </div>
          </div>
        </div>
        <Separator className="bg-gray-700" />
        <div className="flex items-center justify-between py-4 flex-col md:flex-row">
          <Typography variant="p" className="mb-10 md:mb-0">
            Copyright © 2025 VCG Security. Todos los derechos reservados.
          </Typography>
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=615727663750"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="icon">
                <FacebookIcon />
              </Button>
            </a>
            <a
              href="https://www.instagram.com/vcgsecurity/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="icon">
                <InstagramIcon />
              </Button>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="icon">
                <YoutubeIcon />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/icarvallovvintimilla/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="icon">
                <LinkedinIcon />
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
