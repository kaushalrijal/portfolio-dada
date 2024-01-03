import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-4 text-xs">
      All rights reserved 2023 &copy; Gaurav Rijal | Developed and maintained by{" "}
      <Link
        href="https://kaushalrijal.com.np"
        className="cursor-pointer text-primary"
        target="none"
      >
        Kaushal Rijal
      </Link>
    </div>
  );
};

export default Footer;
