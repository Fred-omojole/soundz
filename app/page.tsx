// import Image from "next/image";

import About from "./(Home)/components/About";
import Footer from "./(Home)/components/Footer";
import Header from "./(Home)/components/Header";
import Hero from "./(Home)/components/Hero";
import Product from "./(Home)/components/Product";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <About />
      <Product />
      <Footer />
    </main>
  );
}
