import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased
    selection:bg-emerald-200 selection:text-green-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 size-full bg-neutral-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_50px,#012c22,transparent)]"></div>
        </div>
      </div>      
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App