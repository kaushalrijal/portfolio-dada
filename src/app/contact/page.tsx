import React from "react";

const Contact = () => {
  return (
    <div className="w-full">
      <span className="w-full my-4 text-2xl text-primary italic font-semibold">
        सम्पर्क
      </span>
      <div className=" my-4">
        <form className="w-full flex flex-col  gap-3">
          <input type="text" placeholder="नाम" />
          <input type="email" placeholder="Email" />
          <input type="textarea" placeholder="Your Message" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
