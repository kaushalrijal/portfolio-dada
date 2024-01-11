import { ArrowRight } from "lucide-react";
import React from "react";
import { client, urlFor } from "../../../../client";
import Link from "next/link";

const getData = async (slug: any) => {
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

const Book = async ({ params }: { params: { slug: string } }) => {
  const bookData = await getData(params.slug);
  return (
    <div className="container sm:my-16 ">
      <img
        src={urlFor(bookData.bookImage).url()}
        alt="Book Cover"
        className="mb-4 rounded-sm shadow-md sm:float-left mr-4 w-40 h-auto"
      />

      <div className="text-4xl font-bold text-primary mb-4">
        {bookData.title}
      </div>
      <div className="mb-4 flex flex-row md:flex-col lg:flex-row gap-5 items-center md:items-start lg:items-center">
        <div className="text-lg text-primary border-primary border-2 p-1 rounded-md">
          Rs.{bookData.price}
        </div>
        <Link
          href={`https://wa.me/9852655972/?text=Hi%20I%20am%20interested%20in%20buying%20your%20book%20'${bookData.title}'`}
          target="none"
        >
          <div className="flex flex-row items-center bg-primary text-white p-2 rounded-md">
            Get this book <ArrowRight className="p-1" />
          </div>
        </Link>
      </div>
      <div className="text-lg leading-relaxed">
        <p className="text-justify">{bookData.description}</p>
      </div>
    </div>
  );
};

export default Book;
