import { ArrowRight } from "lucide-react";
import React from "react";
import Book from "./book_item";

const Books = () => {
  return (
    <div className="w-full">
      <span className="text-secondary text-3xl font-semibold gap-1 flex justify-between">
        Books
        <div className="flex items-end text-xs font-normal hover:text-primary cursor-pointer hover:underline">
          View all
          <ArrowRight className="w-3 h-auto pb-0.5" />
        </div>
      </span>
      <div>
        <Book />
      </div>
    </div>
  );
};

export default Books;
