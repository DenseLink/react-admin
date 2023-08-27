import { useState } from "react";

import video from "../../videos/video.mp4";
import {
  HeroBg,
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
        <HeroH1> Scientist and Coder </HeroH1>
        <HeroP>Explore this page to find out more </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
/*goes between HeroContent
<HeroBtnWrapper>
          <Button
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            to="about"
            dark
            primary
          >
            About Me {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>

*/
