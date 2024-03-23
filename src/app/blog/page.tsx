"use client";

import React, { useState } from "react";
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
      mainImage,
      "categories": categories[]->{title}
      
  }   
    `;
  const data = await client.fetch(query);

  return data;
};

const Blogs = async () => {
  const [count, setCount] = useState(0);
  const posts: simpleBlogCard[] = await getData();
  setCount(count + 1);

  return (
    <div className="w-full min-h-[498px]">
      <h1 className="text-3xl italic my-4 font-semibold">
        <span className="text-primary">बिचार</span>&nbsp;तथा लेखहरु
        <span>{count}</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-2 gap-4 w-full ">
        {posts.map((post) => {
          return (
            <Blog
              img={urlFor(post.mainImage).url()}
              title={post.title}
              //// categories={data.categories}
              categories={["blog", "greaterBlog"]}
              slug={post.currentSlug}
              description={post.smallDescription}
              key={post.currentSlug}
            />
          );
        })}
      </div>
    </div>
  );
};
// setInterval(() => {
//   Blogs();
// }, 5000);

export default Blogs;
