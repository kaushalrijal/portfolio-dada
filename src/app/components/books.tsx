import { ArrowRight } from "lucide-react";
import React from "react";
import Book from "./book_item";

const Books = () => {
  return (
    <div className="w-full">
      <span className="text-secondary text-3xl font-semibold gap-1 flex justify-between items-center">
        Resources
        <div className="flex items-end text-xs font-normal hover:text-primary cursor-pointer hover:underline">
          View all
          <ArrowRight className="w-3 h-auto pb-0.5" />
        </div>
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-3 items-center px-2 sm:px-0">
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </div>
  );
};

export default Books;
