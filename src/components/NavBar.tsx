import React from "react";
import Link from "next/link";
import { title } from "process";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <div className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src="images/logo.svg" alt="Logo Image" />
        </div>
        <div className="hidden space-x-6 md:flex">
          {[
            { title: "Pricing", url: "#" },
            { title: "Product", url: "#" },
            { title: "About Us", url: "#" },
            { title: "Careers", url: "#" },
            { title: "Community", url: "#" },
          ].map((item) => (
            <Link
              href={item.url}
              className="hover:text-darkGrayishBlue transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <a href="#" className="hidden btn-primary md:block">
          Get Started
        </a>
      </div>
    </div>
  );
}
