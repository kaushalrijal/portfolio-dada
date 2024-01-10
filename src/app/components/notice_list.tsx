import React from "react";
import NoticeItem from "./notice_item";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Notices = () => {
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
      <NoticeItem
        title="बागमती || स्वास्थ्य सेवा || सहायक पाँचौ || प.हे.न. || पब्लिक हेल्थ नर्स (Public Health Nurse)"
        date="this is date"
      />
      <NoticeItem
        title="बागमती || स्वास्थ्य सेवा || सहायक पाँचौ || प.हे.न. || पब्लिक हेल्थ नर्स (Public Health Nurse)"
        date="this is date"
      />
      <NoticeItem
        title="बागमती || स्वास्थ्य सेवा || सहायक पाँचौ || प.हे.न. || पब्लिक हेल्थ नर्स (Public Health Nurse)"
        date="this is date"
      />
      <NoticeItem
        title="बागमती || स्वास्थ्य सेवा || सहायक पाँचौ || प.हे.न. || पब्लिक हेल्थ नर्स (Public Health Nurse)"
        date="this is date"
      />
    </div>
  );
};

export default Notices;
