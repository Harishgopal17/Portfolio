// import { ReactLenis } from "lenis/dist/lenis-react";
// import "lenis/dist/lenis.css";
// import Lenis from "lenis";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
// import NewProject from "./sections/NewProject";

function App() {
  // const lenis = new Lenis();

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);

  // const isMobile = window.innerWidth < 768;

  return (
    <>
      {/* <ReactLenis root> */}
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
          {/* {isMobile ? <Project /> : <NewProject />} */}
          <Project />
          {/* <NewProject /> */}
        </section>
        <section className="mb-16">
          <Contact />
        </section>
      </main>
      {/* </ReactLenis> */}
    </>
  );
}

export default App;
