import Image from "next/image";
import Navbar from "./components/navbar";
import About from "./components/about";
import Notices from "./components/notice_list";
import Blogs from "./components/blog_snippet";
import Books from "./components/books";

export default function Home() {
  return (
    <main className="">
      <About />
      <Notices />
      <Blogs />
      <Books />
    </main>
  );
}
