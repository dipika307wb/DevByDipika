import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="!mt-[80px]">
        <Hero />
      </main>
    </>
  );
}
