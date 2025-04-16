import { useState } from "react";
import { Header } from "../layout/header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Footer } from "../layout/footer";

export const Home = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleMode = () => setIsLightMode((prev) => !prev);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services isLightMode={isLightMode} toggleMode={toggleMode} />
      <Portfolio isLightMode={isLightMode} />
      <Contact isLightMode={isLightMode} />
      <Footer />
    </>
  );
};
