import React from "react";
import Book from "./book";
import { client, urlFor } from "../../../client";

const getData = async () => {
  const query = `
  *[_type == "book"]| order(_createdAt desc) {
    title,
      price,
      bookImage,
      "slug": slug.current,
      subdetail
  }
  `;
  const data = await client.fetch(query);
  return data;
};

const Books = async () => {
  const books = await getData();

  return (
    <div className="w-full">
      <span className="text-3xl font-semibold italic text-primary items-start w-full my-4">
        Books
      </span>
      <div className="my-4 gap-2 flex flex-col">
        {books.map(
          (
            book: {
              bookImage: any;
              title:
                | string
                | number
                | boolean
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | null
                | undefined;
              price:
                | string
                | number
                | boolean
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | null
                | undefined;
              subdetail:
                | string
                | number
                | boolean
                | React.ReactPortal
                | React.PromiseLikeOfReactNode
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | Iterable<React.ReactNode>
                | null
                | undefined;
            },
            id: React.Key | null | undefined
          ) => {
            return (
              <Book
                image={urlFor(book.bookImage).url()}
                title={book.title}
                price={book.price}
                subdetails={book.subdetail}
                key={id}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Books;
