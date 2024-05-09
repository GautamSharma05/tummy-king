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

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="grid md:grid-cols-12 justify-around gap-4 ">
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
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div className="col-span-3">
            <h3 className="text-xl font-semibold text-primary">Company</h3>
            <ul>
              <li>Address: Beawar, Ajmer, Rajasthan</li>
              <li>Phone: +91 1234567890</li>
              <li>
                Email:
                <a href="mailto:"></a>
              </li>
            </ul>
          </div>
          <div className="col-span-3">
            <h3 className="text-xl font-semibold text-primary">Get In Touch</h3>
            <ul>
              <li>Address: Beawar, Ajmer, Rajasthan</li>
              <li>Phone: +91 1234567890</li>
              <li>
                Email:
                <a href="mailto:"></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
