import Image from "next/image";
import React from "react";

const Book = (props) => {
  return (
    <div className="border-2 bg-white border-secondary flex items-center justify-center flex-col w-auto p-2 rounded-md group hover:scale-105 duration-75 ease-linear cursor-pointer">
      <Image
        src={props.img}
        height={256}
        width={256}
        alt="book cover"
        className="h-40 w-auto object-contain hover:object-fill rounded-md"
        unoptimized
      />
      <h1 className="text-base font-semibold mx-2">{props.title}</h1>
      <h2 className="w-full flex justify-between">
        {props.price}
        <span>Book</span>
      </h2>
    </div>
  );
};

export default Book;
