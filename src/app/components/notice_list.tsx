import React from "react";
import NoticeItem from "./notice_item";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { client } from "../../../client";

const getData = async () => {
  const query = `
  *[_type == "notice"] | order(_updatedAt desc){
    name,
      url,
      "date": _createdAt
  }  
  `;
  const data = await client.fetch(query);
  return data;
};

const Notices = async () => {
  const notices = await getData();
  console.log(notices);
  return (
    <div className="mb-4">
      <span className="text-secondary text-3xl font-semibold gap-1 flex justify-between items-center">
        Notices
        <Link
          href="https://psc.gov.np/category/recruitment-notices.html"
          target="none"
        >
          <div className="flex items-end text-xs font-normal hover:text-primary cursor-pointer hover:underline">
            View all
            <ArrowRight className="w-3 h-auto pb-0.5" />
          </div>
        </Link>
      </span>
      {notices.map((notice, key) => {
        return <NoticeItem title={notice.name} date={notice.date} key={key} />;
      })}
    </div>
  );
};

export default Notices;
