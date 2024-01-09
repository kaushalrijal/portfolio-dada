import Link from "next/link";
import React from "react";

const Blog = (props: {
  categories: any;
  slug: any;
  img: string | undefined;
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
  description:
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
    <div className="flex flex-col w-full h-fit shadow-md shadow-secondary p-1.5 rounded-lg group">
      <div className="h-3/5 overflow-clip rounded-lg bg-blue-400 flex items-center">
        <Link href={`/blog/${props.slug}`}>
          <img src={props.img} alt="blog image" className="rounded-lg" />
        </Link>
      </div>
      <div className="h-2/5">
        {props.categories?.map(
          (
            category:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | React.ReactPortal
              | React.PromiseLikeOfReactNode
              | null
              | undefined
          ) => {
            <h3 className="text-sm ring-1 ring-secondary rounded-md w-fit p-1 my-2">
              Blog
            </h3>;
          }
        )}

        <Link href={`/blog/${props.slug}`}>
          <h1 className="text-lg font-semibold group-hover:text-primary">
            {props.title}
          </h1>
        </Link>
        <h2 className="text-sm">{props.description}</h2>
      </div>
    </div>
  );
};

export default Blog;
