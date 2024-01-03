import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen overflow-clip flex-col items-center md:mx-44 xl:mx-80 p-2 md:p-4">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
