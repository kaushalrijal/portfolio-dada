import { ArrowRight } from "lucide-react";
import React from "react";
import { client, urlFor } from "../../../../client";

const getData = async (slug) => {
  const query = `
    *[slug.current == "${slug}"]{
        title,
          bookImage,
          slug,
          price,
          description
      }[0]
    `;
  const data = await client.fetch(query);
  return data;
};

const Book = async ({ params }) => {
  const bookData = await getData(params.slug);
  return (
    <div className="container sm:my-16 ">
      <img
        src={urlFor(bookData.bookImage).url()}
        alt="Book Cover"
        className="mb-4 rounded-lg shadow-md sm:float-left mr-4 w-40 h-auto"
      />

      <div className="text-4xl font-bold text-primary mb-4">
        {bookData.title}
      </div>
      <div className="mb-4 flex flex-row md:flex-col lg:flex-row gap-5 items-center md:items-start lg:items-center">
        <div className="text-lg text-primary border-primary border-2 p-1 rounded-md">
          Rs.{bookData.price}
        </div>
        <div className="flex flex-row items-center bg-primary text-white p-2 rounded-md">
          Get this book <ArrowRight className="p-1" />
        </div>
      </div>
      <div className="text-lg leading-relaxed">
        <p className="text-justify">{bookData.description}</p>
      </div>
    </div>
  );
};

export default Book;
