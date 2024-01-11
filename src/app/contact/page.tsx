"use client";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const Submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full mb-20 my-4">
      <span className="w-full my-8 text-3xl text-primary italic font-semibold">
        सम्पर्क
      </span>
      <div className=" my-8">
        <form
          className="w-full flex flex-col gap-3"
          onSubmit={(e) => Submit(e)}
        >
          <input
            className="p-1 px-6 py-2 border-black focus:border-primary focus:border-2 focus:outline-none border-[1px] text-black placeholder:text-black rounded-md"
            type="text"
            placeholder="नाम"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="p-1 px-6 py-2 border-black focus:border-primary focus:border-2 focus:outline-none border-[1px] text-black placeholder:text-black rounded-md"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="p-1 px-6 py-2 border-black focus:border-primary focus:border-2 focus:outline-none border-[1px] text-black placeholder:text-black rounded-md"
            placeholder="Your Message"
            onChange={(e) => setMessage(e.target.value)}
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
