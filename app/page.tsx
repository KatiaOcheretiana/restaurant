import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container">
        <About />
        <div>
          <h3>Menu</h3>
          <Menu />
        </div>
      </div>
    </main>
  );
}
