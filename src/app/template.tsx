import Navbar from "./components/navbar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full bg-white">
      <Navbar />
      {children}
    </div>
  );
}
