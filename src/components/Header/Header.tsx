import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
export default function Header() {
  return (
    <header className="flex flex-col md:p-5  md:flex-row justify-around items-center">
      <div className="flex items-center">
        <Image src="/LOGO.png" alt="Tummy King Logo" width={60} height={60} />
        <h1 className="text-lg text-red-600 font-semibold">
          Tummy <span className="text-black">King</span>
        </h1>
      </div>

      <nav className="mb-3 sm:mb-0">
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
            <li>Pizza</li>
            <li>Pasta</li>
            <li>Burger</li>
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

      <div className="flex flex-row items-center  mb-3 sm:mb-0">
        <Button className="rounded-full">Download App</Button>
      </div>
    </header>
  );
}
