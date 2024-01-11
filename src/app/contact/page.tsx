import React from "react";

const Contact = () => {
  return (
    <div className="w-full my-20">
      <span className="w-full my-8 text-2xl text-primary italic font-semibold">
        सम्पर्क
      </span>
      <div className=" my-8">
        <form className="w-full flex flex-col gap-3">
          <input
            className="p-1 border-black focus:border-primary focus:border-2 focus:outline-none border-[1px] text-black placeholder:text-black rounded-md"
            type="text"
            placeholder="नाम"
            required
          />
          <input
            className="p-1 border-black focus:border-primary focus:border-2 focus:outline-none border-[1px] text-black placeholder:text-black rounded-md"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="p-1 border-black focus:border-primary focus:border-2 focus:outline-none border-[1px] text-black placeholder:text-black rounded-md"
            placeholder="Your Message"
            required
          />
          <input
            type="submit"
            className="w-full bg-primary p-2 rounded-md text-white cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
