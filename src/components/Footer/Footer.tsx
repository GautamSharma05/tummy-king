import {
  Facebook,
  FacebookIcon,
  Instagram,
  InstagramIcon,
  Link,
  LinkedinIcon,
  Twitter,
  TwitterIcon,
} from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

export default function Footer() {
  return (
    <footer>
      <div className="container my-4 ">
        <div className="w-full grid md:grid-cols-12 gap-4">
          <div className="col-span-4">
            <h3 className="text-xl font-semibold">
              <span className="text-primary">Tummy</span> King
            </h3>
            <span className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </span>
            <div className="flex gap-4 my-5">
              <Facebook className="text-primary" />
              <Instagram className="text-primary" />
              <TwitterIcon className="text-primary" />
              <LinkedinIcon className="text-primary" />
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="text-xl font-semibold text-primary">About Us</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blogs</li>
              <li>Recipies</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="text-xl font-semibold text-primary">Company</h3>
            <ul>
              <li>Privacy</li>
              <li>Sitemap</li>
              <li>Term of Use</li>
            </ul>
          </div>
          <div className="col-span-4">
            <h3 className="text-xl font-semibold text-primary">Get In Touch</h3>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </span>
            <div className="flex mt-5 gap-2">
              <Input
                type="email"
                placeholder="Email"
                className="px-4 py-1 rounded-full"
              />
              <button className="bg-primary rounded-full text-white px-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm">
        Copyright © 2024 <span className="text-primary">Tummy </span>King.
      </p>
    </footer>
  );
}
