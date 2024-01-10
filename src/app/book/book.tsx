import React from "react";

const Book = (props) => {
  return (
    <div className="w-full flex flex-row gap-3">
      <img className="w-24 sm:w-32 h-auto" alt="book image" src={props.image} />
      <div className="flex flex-col gap-1">
        <span className="text-2xl sm:text-3xl text-primary font-semibold">
          {props.title}
        </span>
        <span className="border-[2px] border-primary text-primary w-fit p-1 rounded-md">
          {props.price}
        </span>
        <span>{props.subdetails}</span>
      </div>
    </div>
  );
};

export default Book;
