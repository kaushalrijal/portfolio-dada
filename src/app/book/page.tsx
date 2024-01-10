import React from "react";
import Book from "./book";

const Books = () => {
  return (
    <div className="w-full">
      <span className="text-3xl font-semibold italic text-primary items-start w-full my-4">
        Books
      </span>
      <div className="my-4">
        <Book />
      </div>
    </div>
  );
};

export default Books;
