import React from "react";
import { ArrowRight } from "lucide-react";
import { BlogItem, BlogMajor } from "./blog_item";

const Blogs = () => {
  return (
    <div className="my-2">
      <span className="text-secondary text-2xl font-semibold gap-1 flex justify-between">
        Blogs
        <div className="flex items-end text-xs font-normal hover:text-primary cursor-pointer hover:underline">
          View all
          <ArrowRight className="w-3 h-auto pb-0.5" />
        </div>
      </span>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-1/2">
          <BlogMajor />
        </div>
        <div className="w-1/2">
          <BlogItem />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
