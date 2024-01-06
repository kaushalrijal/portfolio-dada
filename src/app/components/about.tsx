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
    <main className="py-2 md:py-1">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-8 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/100 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 className="mt-1 text-4xl font-semibold text-slate-100 sm:text-secondary -z-1">
            Gaurav Rijal
          </h1>
          <p className="text-sm leading-4 font-medium text-slate-100 sm:text-secondary">
            नमस्कार, म
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
            } sm:shadow-sm sm:shadow-secondary w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full`}
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
        <div className="mt-4 text-lg leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 text-slate-900 text-justify">
          सरकारी सेवा कर्मचारी, जी.आर. इन्स्टिच्युटको संस्थापक र TU, व्यवस्थापन
          विधाको विद्यार्थीको रूपमा, सार्वजनिक सेवामा मेरो प्रतिबद्धता अटल छ। म
          व्यावहारिक अनुभव संग शैक्षिक अन्तर्दृष्टि मिश्रण गरि, सकारात्मक
          परिवर्तन को लक्ष्य सहित अघि बढेको छु । समाजको सुधारको लागि समर्पित, म
          एक विद्यार्थी र व्यवसायीको रूपमा मेरो बहुआयामिक भूमिकाहरू मार्फत
          अर्थपूर्ण र दिगो प्रभाव पार्ने प्रयासमा तत्पर छु । More
          <Link href="/about">
            <span className="text-primary"> here</span>
          </Link>
        </div>
      </div>
      <div className="text-sm md:text-base border-t-2 border-secondary border-b-2 flex justify-between py-1 my-4 items-center">
        <p className="text-base">Let&apos;s connect: </p>
        <div className="flex justify-between w-1/2 text-secondary">
          <Link href="https://m.facebook.com/gaurabtheanupam" target="none">
            <FacebookRounded className="p-0.5 md:w-8 md:h-8 w-6 h-auto hover:rounded-full hover:bg-slate-400/75" />
          </Link>
          <Link href="https://twitter.com/gaurabrijal4" target="none">
            <Twitter className="p-0.5 md:w-8 md:h-8 w-6 h-auto hover:rounded-full hover:bg-slate-400/75" />
          </Link>
          <Link href="https://instagram.com/gaurabtheanupam" target="none">
            <Instagram className="p-0.5 md:w-8 md:h-8 w-6 h-auto hover:rounded-full hover:bg-slate-400/75" />
          </Link>
          <Link href="https://wa.me/9852655972" target="none">
            <WhatsApp className="p-0.5 md:w-8 md:h-8 w-6 h-auto hover:rounded-full hover:bg-slate-400/75" />
          </Link>
          <Link href="mailto:grr4425@gmail.com" target="none">
            <Mail className="p-0.5 md:w-8 md:h-8 w-6 h-auto hover:rounded-full hover:bg-slate-400/75" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;
