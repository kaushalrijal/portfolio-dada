import Image from "next/image";
import React from "react";

const Book = () => {
  return (
    <div className="border-2 bg-white border-secondary flex items-center justify-center flex-col w-auto p-2 rounded-md group hover:scale-105 duration-75 ease-linear cursor-pointer">
      <Image
        src="/img/COVER.JPG"
        height={256}
        width={256}
        alt="book cover"
        className="h-40 w-auto object-contain hover:object-fill rounded-md"
        unoptimized
      />
      <h1 className="text-base font-semibold mx-2">Nayab Subba Mentor</h1>
      <h2 className="w-full flex justify-between">
        Price
        <span>Book</span>
      </h2>
    </div>
  );
};

export default Book;
