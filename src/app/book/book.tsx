import React from "react";

const Book = (props: {
  image: string | undefined;
  title:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  price:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
  subdetails:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | React.PromiseLikeOfReactNode
    | null
    | undefined;
}) => {
  return (
    <div className="w-full flex flex-row gap-3">
      <img
        className="w-1/5 flex flex-nowrap"
        alt="book image"
        src={props.image}
      />
      <div className="flex flex-col gap-1 w-4/5">
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
