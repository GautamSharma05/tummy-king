import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
export default function Header() {
  return (
    <header className="flex p-5 justify-between md:justify-around items-center">
      <div className="flex items-center">
        <Image src="/LOGO.png" alt="Tummy King Logo" width={60} height={60} />
        <h1 className="text-lg text-red-600 font-semibold">
          Tummy <span className="text-black">King</span>
        </h1>
      </div>

      <nav className="hidden md:block mb-3 sm:mb-0">
        <ul className="flex gap-2 text-xs md:gap-5 lg:text-sm">
          <li>
            <Link className="hover:underline hover:text-primary" href="/">
              Home
            </Link>
          </li>
          
          <li>
            <Link className="hover:underline hover:text-primary" href="/blog">
              Blogs
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline hover:text-primary"
              href="/recipes"
            >
              Recipes
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline hover:text-primary"
              href="/contact-us"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline hover:text-primary"
              href="/about-us"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline hover:text-primary"
              href="/gallery"
            >
              Gallery
            </Link>
          </li>
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
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/blog">Blogs</Link>
                </li>
                <li>
                  <Link href="/recipes">Recipes</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
              </ul>
            </nav>
            <SheetFooter className="flex flex-col items-center mt-5">
            <SheetClose asChild>
              <Link  href="https://play.google.com/store/apps/details?id=com.app.ffc">
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
