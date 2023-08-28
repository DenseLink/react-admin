import { useState } from "react";

import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjFour,
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} setToggle={setIsOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
