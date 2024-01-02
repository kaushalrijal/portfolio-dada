import React from "react";

const NoticeItem = (props) => {
  return (
    <div className="border-b-[1px] border-secondary group cursor-pointer">
      <span className="text-lg font-medium group-hover:text-primary">
        {props.title}
      </span>
      <span className="text-sm font-serif italic float-right inline-flex">
        {props.date}
      </span>
    </div>
  );
};

export default NoticeItem;
