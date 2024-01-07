import React from "react";
import Image from "next/image";

export const BlogItem = (props: {
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
    <article className="w-full flex items-start gap-2 border-secondary rounded-md group">
      <img
        src="https://www.themoviedb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
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
          <dd>{props.description}</dd>
          <dd className="px-1.5 ring-1 ring-slate-200 rounded w-fit">
            {props.slug}
          </dd>
        </div>
      </div>
    </article>
  );
};

export const BlogMajor = () => {
  return (
    <div className="relative h-52 items-end flex overflow-hidden rounded-md group cursor-pointer group-hover:shadow-sm group-hover:shadow-black">
      <Image
        src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={256}
        height={256}
        alt="an image"
        className="object-fill -z-10 absolute w-full h-full group-hover:scale-105 duration-100"
        unoptimized
      />
      <div className="text-white flex-col flex p-2 bg-gradient-to-t from-black to-black/10 w-full">
        <span className="bg-secondary text-white border-white border-[1px] w-fit p-1 text-xs rounded-md">
          Category
        </span>
        <span className="text-lg font-normal group-hover:underline duration-100  ">
          यो एउटा शिर्षक हो र यो शिर्षक निकै राम्रो छ |
        </span>
      </div>
    </div>
  );
};
