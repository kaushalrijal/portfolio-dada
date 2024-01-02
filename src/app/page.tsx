import Image from "next/image";
import Navbar from "./components/navbar";
import About from "./components/about";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-clip flex-col items-center md:mx-44 xl:mx-80 p-2 md:p-4">
      <About />
    </main>
  );
}
