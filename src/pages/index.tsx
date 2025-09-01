import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "./About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="!mt-[80px]">
        <Hero />
        <About />
      </main>
    </>
  );
}
