import { Header } from "../layout/header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { Footer } from "../layout/footer";


export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer /> 
    </>
  );
};
