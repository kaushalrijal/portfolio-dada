"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navitems = [
  { id: 1, value: "Home", href: "/" },
  { id: 2, value: "About", href: "/about" },
  { id: 3, value: "Blogs", href: "/blogs" },
  { id: 4, value: "Misc", href: "/misc" },
  { id: 5, value: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 w-full z-10 rounded-sm">
      <div className="flex items-center justify-between w-full sm:px-2.5 bg-white backdrop-blur-sm z-10 md:justify-center md:gap-6 py-2 md:py-4 text-base">
        {navitems.map((item) => {
          return (
            <Link href={item.href} key={item.id}>
              <div
                key={item.id}
                className={`p-0.5 rounded-sm hover:ring-1 hover:ring-secondary
                ${
                  pathname === item.href
                    ? "bg-primary text-white"
                    : "bg-none text-black"
                }`}
              >
                {item.value}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
