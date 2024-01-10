import React from "react";
import { ArrowRight } from "lucide-react";
import { BlogItem, BlogMajor } from "./blog_item";
import { client, urlFor } from "../../../client";
import Link from "next/link";

const getData = async () => {
  const query = `
  *[_type == 'post'] | order(_createdAt desc){  
    title,
      smallDescription,
      "currentSlug": slug.current,   
      mainImage 
  }   
    `;
  const data = await client.fetch(query);

  return data;
};

const Blogs = async () => {
  const data = await getData();
  return (
    <div className="my-2">
      <span className="text-secondary text-3xl font-semibold gap-1 flex justify-between w-full my-1">
        Blogs
        <div className="flex items-center text-xs font-normal hover:text-primary cursor-pointer hover:underline">
          <Link href="/blog">View all</Link>
          <ArrowRight className="w-3 h-auto pb-0.5" />
        </div>
      </span>
      <div className="flex flex-col lg:flex-row w-full gap-2">
        <div className="w-full lg:w-1/2 h-full">
          <Link href={`/blog/${data[0].currentSlug}`}>
            <BlogMajor
              title={data[0].title}
              image={urlFor(data[0].mainImage).url()}
            />
          </Link>
        </div>
        <div className="w-full lg:w-1/2 h-full rounded-md gap-3 flex-col flex justify-between">
          <Link href={`/blog/${data[1].currentSlug}`}>
            <BlogItem
              title={data[1].title}
              // slug={data[1].currentSlug}
              slug="Blog"
              description={data[1].smallDescription}
              image={urlFor(data[1].mainImage).url()}
            />
          </Link>
          <Link href={`/blog/${data[2].currentSlug}`}>
            <BlogItem
              title={data[2].title}
              // slug={data[2].currentSlug}
              slug="Blog"
              description={data[2].smallDescription}
              image={urlFor(data[2].mainImage).url()}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
