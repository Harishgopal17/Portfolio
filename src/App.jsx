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
        <section>
          <Hero />
        </section>
        <section className="mt-16">
          <About />
        </section>
        <section className="mt-16">
          <Skills />
        </section>
        <section className="mt-16">
          <Project />
        </section>
        <section className="mt-16 mb-10">
          <Contact />
        </section>
      </main>
    </>
  );
}

export default App;
