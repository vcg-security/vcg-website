import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./ui/button";
import { ArrowRightIcon, PhoneCallIcon, ShoppingCartIcon } from "lucide-react";
import { TypeHeaderMenuSkeleton } from "@/contentful-types";
import { Entry } from "contentful";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Typography } from "./Typography";

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-.5 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

interface Props {
  menu: Entry<
    TypeHeaderMenuSkeleton,
    "WITHOUT_UNRESOLVABLE_LINKS",
    string
  > | null;
}

export function Header3({ menu }: Props) {
  if (!menu) return null;
  return (
    <header className="bg-black relative">
      <div className="bg-gray-950">
        <Container className="flex justify-end py-1">
          <div>
            <Typography
              variant="muted"
              className="flex items-center gap-2 text-white/70"
            >
              <PhoneCallIcon className="w-4 h-4" />
              Telefonos{" "}
              <a href="tel:0998270225" className="hover:underline">
                099 827 0225
              </a>{" "}
              -{" "}
              <a href="tel:0969117085" className="hover:underline">
                096 911 7085
              </a>
            </Typography>
          </div>
        </Container>
      </div>
      <Container className="flex items-center justify-between py-2">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image
              src="//images.ctfassets.net/gsfj8g0zut06/1JhtylnPUef0jQU4CPurCZ/afb8cedf38352040e39575d30813f6ba/Logo-Blanco---Sin-Fondo.webp"
              alt="Logo"
              width={300}
              height={100}
              className="w-40"
            />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {menu.fields.items.map((item) => {
                if (item?.fields.subItems && item?.fields.subItems.length > 0) {
                  return (
                    <NavigationMenuItem key={item?.sys.id}>
                      <NavigationMenuTrigger>
                        {item?.fields.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-1 p-4 md:w-[500px] lg:w-[700px] lg:grid-cols-[.75fr_1fr]">
                          {item?.fields.subItems.map((subItem) => (
                            <ListItem
                              key={subItem?.sys.id}
                              href={subItem?.fields.url || "/"}
                              title={subItem?.fields.name}
                            >
                              {subItem?.fields.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={item?.sys.id}>
                    <Link
                      href={item?.fields.url || "/"}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item?.fields.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            Cotizar blindaje <ArrowRightIcon />
          </Button>
          <Button size="icon" variant="secondary">
            <ShoppingCartIcon />
          </Button>
        </div>
      </Container>
    </header>
  );
}
