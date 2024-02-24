"use client";

import React from "react";
import NoticeItem from "./notice_item";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { client } from "../../../client";
import NepaliDate from "nepali-date-converter";
import { UrlObject } from "url";

const getData = async () => {
  const query = `
  *[_type == "notice"] | order(_updatedAt desc){
    name,
      url,
      "date": _createdAt
  }[0...5]  
  `;
  const data = await client.fetch(query);
  return data;
};

const Notices = async () => {
  const notices = await getData();

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
      {notices.map(
        (
          notice: {
            date: string | number | Date;
            url: string | UrlObject;
            name:
              | string
              | number
              | boolean
              | React.ReactPortal
              | React.PromiseLikeOfReactNode
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | Iterable<React.ReactNode>
              | null
              | undefined;
          },
          key: React.Key | null | undefined
        ) => {
          const englishDate = new Date(notice.date);
          const nepaliDate = new NepaliDate(englishDate);
          return (
            <Link href={notice.url} target="none" key={key}>
              <NoticeItem
                title={notice.name}
                date={nepaliDate.format("YYYY/MM/DD", "np").toString()}
              />
            </Link>
          );
        }
      )}
    </div>
  );
};

export default Notices;
