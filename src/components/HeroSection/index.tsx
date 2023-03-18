import { useState } from "react";

import video from "../../videos/video.mp4";
import { Button } from "../ButtonStyle";
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./HeroStyles";

const HeroSection = (): JSX.Element => {
  const [hover, setHover] = useState(false);

  const onHover = (): void => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1> Writing has never been easier </HeroH1>
        <HeroP>Sign up now and receive 7 days free</HeroP>
        <HeroBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            to="signup"
            dark
            primary
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
