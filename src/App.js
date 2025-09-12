import "./App.css";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div >
      <ToastContainer />
      <Navbar />
      <main className="pt-16">        
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
