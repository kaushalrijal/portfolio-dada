import React, { ReactNode } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const BlogItem = (props: {
  image: string | undefined;
  description: ReactNode;
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
  slug:
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
    <article className="w-full h-full justify-between flex items-start gap-2 border-secondary rounded-md group">
      <img
        src={props.image}
        alt=""
        width="60"
        height="60"
        className="flex-none rounded-md bg-slate-100 w-24 h-24 object-cover"
      />
      <div className="min-w-0 relative flex-auto">
        <h2 className="font-semibold text-slate-900 text-ellipsis text-base md:text-sm lg:text-base group-hover:cursor-pointer group-hover:text-primary cursor-pointer">
          {props.title}.
        </h2>
        <div>
          <dd className="px-1.5 ring-1 ring-slate-200 rounded w-fit">
            {props.slug}
          </dd>
        </div>
      </div>
    </article>
  );
};

export const BlogMajor = (props: {
  image: string | StaticImport;
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
}) => {
  return (
    <div className="relative h-52 items-end flex overflow-hidden rounded-md group cursor-pointer group-hover:shadow-sm group-hover:shadow-black">
      <Image
        src={props.image}
        width={256}
        height={256}
        alt="an image"
        className="object-fill -z-10 absolute w-full h-full group-hover:scale-105 duration-100"
        unoptimized
      />
      <div className="text-white flex-col flex p-2 bg-gradient-to-t from-black to-secondary/5 w-full">
        <span className="text-lg font-normal group-hover:underline duration-100  ">
          {props.title}
        </span>
      </div>
    </div>
  );
};
