import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";

export function Header() {
  return (
    <header>
      <div className="bg-gray-950">
        <Container>
          <div className="flex items-center justify-end">
            <Button variant="ghost" size="icon" className="text-white">
              <ShoppingCartIcon />
            </Button>
          </div>
        </Container>
      </div>
      <div className="bg-black py-4">
        <Container>
          <div className="flex items-center justify-center">
            <Link href="/">
              <Image
                src="https://images.ctfassets.net/gsfj8g0zut06/1JhtylnPUef0jQU4CPurCZ/afb8cedf38352040e39575d30813f6ba/Logo-Blanco---Sin-Fondo.webp"
                alt="Logo"
                width={300}
                height={100}
                className="w-64"
              />
            </Link>
          </div>
        </Container>
      </div>
      <div className="bg-gray-950 py-2">
        <Container className="flex items-center justify-center gap-4">
          <Button variant="secondary">Inicio</Button>
          <Link href="/quienes-somos">
            <Button variant="secondary">Quienes somos</Button>
          </Link>
          <Button variant="secondary">Home</Button>
          <Button variant="secondary">Home</Button>
        </Container>
      </div>
    </header>
  );
}
