import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const Links = [
  {
    key: "1",
    name: "Home",
    url: "/",
  },
  {
    key: "2",
    name: "Blogs",
    url: "/blog",
  },
  {
    key: "3",
    name: "Recipes",
    url: "/recipes",
  },
  {
    key: "4",
    name: "Contact Us",
    url: "/contact-us",
  },
  {
    key: "5",
    name: "About Us",
    url: "/about-us",
  },
  {
    key: "6",
    name: "Gallery",
    url: "/gallery",
  },
];
export default function Header() {
  return (
    <header className="flex p-5 justify-between md:justify-around items-center">
      <div className="flex items-center">
       <Link href='/'><Image src="/LOGO.png" alt="Tummy King Logo" width={60} height={60} /></Link> 
       <Link href='/'><h1 className="text-lg text-red-600 font-semibold">
          Tummy <span className="text-black">King</span>
        </h1>
        </Link>
      </div>

      <nav className="hidden md:block mb-3 sm:mb-0">
        <ul className="flex gap-2 text-xs md:gap-5 lg:text-sm">
          {Links.map((link) => (
            <li key={link.key}>
              <Link
                className="hover:underline hover:text-primary"
                href={link.url}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden md:flex  justify-center items-center  mb-3 sm:mb-0">
        <Link href="https://play.google.com/store/apps/details?id=com.app.ffc">
          <Button className="rounded-full">Download App</Button>
        </Link>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <MenuIcon size={24} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="mt-6">
              <SheetTitle>Use Below Links To Navigate</SheetTitle>
            </SheetHeader>
            <nav>
              <ul className="flex flex-col mt-5 items-center gap-2">
                {Links.map((link) => (
                  <SheetClose asChild key={link.key}>
                    <li key={link.key}>
                      <Link
                        className="hover:underline hover:text-primary"
                        href={link.url}
                      >
                        {link.name}
                      </Link>
                    </li>
                  </SheetClose>
                ))}
              </ul>
            </nav>
            <SheetFooter className="flex flex-col items-center mt-5">
              <SheetClose asChild>
                <Link href="https://play.google.com/store/apps/details?id=com.app.ffc">
                  <Button className="rounded-full">Download App</Button>
                </Link>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
