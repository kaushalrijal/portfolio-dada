import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-4 text-xs flex flex-col sm:flex-row justify-between w-full">
      All rights reserved 2023 &copy; Gaurav Rijal{" "}
      <span>
        Developed and maintained by{" "}
        <Link
          href="https://kaushalrijal.com.np"
          className="cursor-pointer text-primary"
          target="none"
        >
          Kaushal Rijal
        </Link>
      </span>
    </div>
  );
};

export default Footer;
