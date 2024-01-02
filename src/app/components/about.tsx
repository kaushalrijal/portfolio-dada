"use client";
import {
  FacebookRounded,
  WhatsApp,
  Twitter,
  Instagram,
  Mail,
} from "@mui/icons-material";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const About = () => {
  const [loading, setLoading] = useState(true);
  return (
    // <div classNameName="flex flex-col-reverse md:flex-row w-full justify-between my-2">
    //   <div classNameName="flex justify-start flex-col">
    //     <h3 classNameName="text-xs md:text-sm">Hello, Im</h3>
    //     <h1 classNameName="text-xl md:text-3xl lg:text-5xl">Gaurav Rijal</h1>
    //     <h2 classNameName="text-sm md:text-base lg:text-lg">A Human Being</h2>
    //   </div>
    //   <div classNameName="flex items-center">Image will go here</div>
    // </div>
    <main className="py-2 md:py-1">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-8 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/100 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 className="mt-1 text-4xl font-semibold text-slate-100 md:text-slate-900 -z-1">
            Gaurav Rijal
          </h1>
          <p className="text-sm leading-4 font-medium text-slate-100 md:text-slate-900">
            Hey, I&apos;m
          </p>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <Image
            src="/img/IMG1.JPG"
            alt=""
            width={512}
            height={512}
            className={`${
              loading ? "animate-pulse bg-gray-200 blur-sm" : ""
            } shadow-sm shadow-secondary w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full`}
            loading="lazy"
            unoptimized
            onLoad={() => setLoading(false)}
          />
          <Image
            src="/img/IMG2.JPG"
            alt=""
            width={512}
            height={512}
            className={`${
              loading ? "animate-pulse bg-gray-200 blur-sm" : ""
            } shadow-sm shadow-secondary hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32`}
            loading="lazy"
            unoptimized
            onLoad={() => setLoading(false)}
          />
          <Image
            src="/img/IMG3.JPG"
            alt=""
            width={512}
            height={512}
            className={`${
              loading ? "animate-pulse bg-gray-200 blur-sm" : ""
            } shadow-sm shadow-secondary hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32`}
            loading="lazy"
            unoptimized
            onLoad={() => setLoading(false)}
          />
        </div>
        <div className="mt-4 text-base leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 text-slate-900 text-justify">
          As a Government Service Employee, Founder of GR Institute, and a TU
          Management student, my commitment to public service is unwavering. I
          blend academic insights with practical experience, aiming for positive
          change. Dedicated to the betterment of society, I strive to make a
          meaningful and lasting impact through my multifaceted roles as a
          student and professional. More
          <Link href="/about">
            <span className="text-primary"> here</span>
          </Link>
        </div>
      </div>
      <div className="text-sm md:text-base border-t-2 border-secondary border-b-2 flex justify-between py-1 my-4">
        <p className="text-base">Let&apos;s connect: </p>
        <div className="flex justify-between w-1/2 text-secondary">
          <Link href="https://m.facebook.com/gaurabtheanupam" target="none">
            <FacebookRounded className="p-0.5 hover:rounded-full hover:bg-slate-400/75" />
          </Link>
          <Link href="https://twitter.com/gaurabrijal4" target="none">
            <Twitter className="p-0.5 hover:rounded-full hover:bg-slate-400/75" />
          </Link>
          <Link href="https://instagram.com/gaurabtheanupam" target="none">
            <Instagram className="p-0.5 hover:rounded-full hover:bg-slate-400/75" />
          </Link>
          <Link href="https://wa.me/9852655972" target="none">
            <WhatsApp className="p-0.5 hover:rounded-full hover:bg-slate-400/75" />
          </Link>
          <Link href="mailto:grr4425@gmail.com" target="none">
            <Mail className="p-0.5 hover:rounded-full hover:bg-slate-400/75" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;
