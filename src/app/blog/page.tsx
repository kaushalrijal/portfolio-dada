import React from "react";
import { client } from "../../../client";
import { simpleBlogCard } from "../lib/interface";
import { BlogItem } from "../components/blog_item";
import Blog from "./blog";
import { urlFor } from "../../../client";

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
  const data: simpleBlogCard[] = await getData();

  return (
    <div className="w-full min-h-[498px]">
      <h1 className="text-3xl italic my-4">बिचार तथा लेखहरु</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-2 gap-4 w-full ">
        {data.map((posts) => {
          return (
            <Blog
              img={urlFor(posts.mainImage).url()}
              title={posts.title}
              category={"BLOG"}
              slug={posts.currentSlug}
              description={posts.smallDescription}
              key={posts.currentSlug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
