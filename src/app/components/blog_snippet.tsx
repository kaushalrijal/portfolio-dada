import React from "react";
import { ArrowRight } from "lucide-react";
import { BlogItem, BlogMajor } from "./blog_item";

const Blogs = () => {
  return (
    <div className="my-2">
      <span className="text-secondary text-3xl font-semibold gap-1 flex justify-between w-full my-1">
        Blogs
        <div className="flex items-center text-xs font-normal hover:text-primary cursor-pointer hover:underline">
          View all
          <ArrowRight className="w-3 h-auto pb-0.5" />
        </div>
      </span>
      <div className="flex flex-col md:flex-row w-full gap-2">
        <div className="w-full md:w-1/2 h-full">
          <BlogMajor />
        </div>
        <div className="w-full md:w-1/2 h-full rounded-md gap-2 flex-col flex">
          <BlogItem />
          <BlogItem />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
