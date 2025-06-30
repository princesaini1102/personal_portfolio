import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
