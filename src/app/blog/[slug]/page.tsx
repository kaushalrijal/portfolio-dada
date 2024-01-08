import React from "react";
import { client, urlFor } from "../../../../client";
import { fullBlog } from "@/app/lib/interface";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const getData = async (slug: any) => {
  const query = `
  *[_type=='post' && slug.current=='${slug}']
  {
    'currentSlug': slug.current,
      title,
      body,
      mainImage    
  }[0]
  `;
  const data = await client.fetch(query);
  return data;
};

const Blogs = async ({ params }: { params: { slug: string } }) => {
  const data: fullBlog = await getData(params.slug);
  return (
    <div className="flex w-full items-center flex-col">
      <h1 className="block text-2xl sm:text-3xl my-4 leading-8 tracking-tight text-center font-semibold">
        {data.title}
      </h1>
      <Image
        src={urlFor(data.mainImage).url()}
        alt="Image Main"
        width={512}
        height={512}
        className="my-4 w-full h-full border"
        priority
        unoptimized
      ></Image>
      <div className="my-4 prose prose-blue prose-lg">
        <PortableText value={data.body} />
      </div>
    </div>
  );
};

export default Blogs;
