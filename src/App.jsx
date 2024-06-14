import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen container relative text-white">
        <section className="mb-20">
          <Hero />
        </section>
        <section className="mb-20">
          <About />
        </section>
        <section className="mb-20">
          <Skills />
        </section>
        <section className="mb-20">
          <Project />
        </section>
        <section className="mb-16">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
