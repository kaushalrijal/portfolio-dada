"use client";

import { ArrowRight } from "lucide-react";
import React from "react";
import Book from "./book_item";
import { client, urlFor } from "../../../client";
import Link from "next/link";

const getData = async () => {
  const query = `
  *[_type == "book"]| order(_createdAt desc) {
    title,
      price,
      bookImage,
      "slug": slug.current,
  }
  `;
  const data = await client.fetch(query);
  return data;
};

const Books = async () => {
  const books = await getData();
  return (
    <div className="w-full">
      <span className="text-secondary text-3xl font-semibold gap-1 flex justify-between items-center">
        Resources
        <Link href="/book">
          <div className="flex items-end text-xs font-normal hover:text-primary cursor-pointer hover:underline">
            View all
            <ArrowRight className="w-3 h-auto pb-0.5" />
          </div>
        </Link>
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-3 items-center px-2 sm:px-0">
        {books.map(
          (
            book: {
              slug: any;
              title: string;
              price:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | Iterable<React.ReactNode>
                | null
                | undefined;
              bookImage: any;
            },
            id: number
          ) => {
            const title = book.title;
            return id <= 5 ? (
              <Link href={`/book/${book.slug}`} key={id}>
                <Book
                  price={book.price}
                  img={urlFor(book.bookImage).url()}
                  title={title}
                />
              </Link>
            ) : (
              <></>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Books;
