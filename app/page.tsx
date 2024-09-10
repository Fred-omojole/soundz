// import Image from "next/image";

import About from "./(Home)/components/About";
import Header from "./(Home)/components/Header";
import Hero from "./(Home)/components/Hero";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
    </main>
  );
}
