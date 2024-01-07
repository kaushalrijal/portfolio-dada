import React from "react";
import { client } from "../../../client";
import { simpleBlogCard } from "../lib/interface";
import { BlogItem } from "../components/blog_item";

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
  console.log(data);
  return (
    <div className="w-full bg-teal-700">
      <h1>Blogs</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-2 w-full bg-slate-400">
        {data.map((posts) => {
          return (
            <BlogItem
              title={posts.title}
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
