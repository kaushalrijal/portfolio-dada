import { WhatsApp } from "@mui/icons-material";
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import QA from "./qa";

const details = [
  { title: "मेरो जन्म?", sub: "म भारपा, पाँचथर मा जन्मिएको हु ।" },
  {
    title: "मेरो उमेर?",
    sub: "मेरो जन्म असार २५ मा भएको हो । वर्ष छुट्याउने काम तपाईहरुको नै ।",
  },
  {
    title: "मेरो पेशा?",
    sub: "जीवन मेरो पाठशाला हो । त्यसैले म आजीवन विद्यार्थी हुं । सार्वजनिक प्रशासनको क्षेत्रमा क्रियाशिल छु । ",
  },
  { title: "मलाइ मन पर्छ?", sub: "चिया, किताब र मेस्सी ।" },
  {
    title: "मेरो लक्ष्य ?",
    sub: "एक साधारण जीवन । सके भलो गरु, कुभलो गर्न नपरोस ।",
  },
  { title: "मेरो विश्वास ?", sub: "इमान्दारिता र काम प्रति ।" },
  { title: "मेरो बिचार ?", sub: "कौशल रिजाल विश्वका सर्वश्रेष्ठ पुरुष हुन् ।" },
];

const About = () => {
  return (
    <div className="w-full flex items-center flex-col px-0.5 sm:px-0">
      <span className="text-2xl sm:text-3xl my-4 italic">
        <span className="text-primary">Everything</span> you need to know
      </span>
      <div className="flex flex-row items-center gap-2 w-full justify-between">
        <div className="flex flex-col gap-1">
          <Link
            href="https://m.facebook.com/gaurabtheanupam"
            target="none"
            className="flex gap-1 hover:text-primary"
          >
            <Facebook /> @gaurabtheanupam
          </Link>

          <Link
            href="https://instagram.com/gaurabtheanupam"
            target="none"
            className="flex gap-1 hover:text-primary"
          >
            <Instagram /> @gaurabtheanupam
          </Link>

          <Link
            href="https://x.com'gaurabrijal4"
            target="none"
            className="flex gap-1 hover:text-primary"
          >
            <Twitter /> @gaurabrijal4
          </Link>

          <Link
            href="mailto:grr4425@gmail.com"
            target="none"
            className="flex gap-1 hover:text-primary"
          >
            <Mail /> grr4425@gmail.com
          </Link>

          <Link
            href="https://wa.me/9779852655972"
            target="none"
            className="flex gap-1 hover:text-primary"
          >
            <WhatsApp /> +977 9852655972
          </Link>

          <Link
            href="tel:9779852655972"
            target="none"
            className="flex gap-1 hover:text-primary"
          >
            <Phone /> +977 9852655972
          </Link>
        </div>
        <div className="text-9xl hidden md:flex">{"}"}</div>
        <div>
          <Image
            src="/img/IMG_ABOUT.JPG"
            alt="profile picture"
            width={256}
            height={256}
            className="rounded-full border-[2px] border-black p-1 w-auto h-auto sm:h-44 sm:w-44"
          />
        </div>
      </div>
      <div className="w-full flex flex-col text-sm my-4 gap-2">
        {details.map((_) => {
          return <QA title={_.title} sub={_.sub} key={_.title} />;
        })}
      </div>
    </div>
  );
};

export default About;
