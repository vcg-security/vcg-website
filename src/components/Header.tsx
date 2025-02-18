import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="bg-black">
      <Container>
        <div className="flex items-center justify-between">
          <Image
            src="https://images.ctfassets.net/gsfj8g0zut06/5TTjeblvpN1MzupiK3qfPR/1e9de7dc9c304eb1659e6d7294f517cf/Logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
