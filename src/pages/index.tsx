import { useState } from "react";
import Navbar from "src/components/Navbar";

import HeroSection from "../components/HeroSection";
import Sidebar from "../components/Sidebar";

const Home = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} setToggle={setIsOpen} toggle={toggle} />
      <Navbar setToggle={setIsOpen} toggle={toggle} />
      <HeroSection />
    </>
  );
};

export default Home;
