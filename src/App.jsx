import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Process from "./components/Process";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
    return (
        <LanguageProvider>
            <Navbar />
            <main>
                <Hero />
                <TechMarquee />
                <About />
                <Projects />
                <Services />
                <Process />
            </main>
            <Footer />
        </LanguageProvider>
    );
}