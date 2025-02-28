import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./ui/button";
import { ShoppingCartIcon } from "lucide-react";
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
  menu: Entry<TypeHeaderMenuSkeleton, "WITHOUT_UNRESOLVABLE_LINKS", string>;
}

export function Header2({ menu }: Props) {
  return (
    <header>
      <div className="bg-black py-4">
        <Container className="relative">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="https://images.ctfassets.net/gsfj8g0zut06/1JhtylnPUef0jQU4CPurCZ/afb8cedf38352040e39575d30813f6ba/Logo-Blanco---Sin-Fondo.webp"
                alt="Logo"
                width={300}
                height={100}
                className="w-52"
              />
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="default" size="icon">
                <ShoppingCartIcon />
              </Button>
            </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.fields.items.map((item) => {
                  if (
                    item?.fields.subItems &&
                    item?.fields.subItems.length > 0
                  ) {
                    return (
                      <NavigationMenuItem key={item?.sys.id}>
                        <NavigationMenuTrigger>
                          {item?.fields.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
        </Container>
      </div>
    </header>
  );
}
