import type React from "react";

import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServiceStyles";
import Icon1 from "./images/svg-1.svg";
import Icon3 from "./images/svg-3.svg";
import Icon2 from "./images/svg-5.svg";

type IconProps = React.SVGProps<SVGSVGElement> & {
  src: string;
};

const Services = (): JSX.Element => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Portfolio</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon2 as IconProps["src"]} />
          <ServicesH2>Portfolio Website</ServicesH2>
          <ServicesP>Look at the code I used to create this website</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1 as IconProps["src"]} />
          <ServicesH2>Covid On Flight</ServicesH2>
          <ServicesP>
            Covid on Flight is the front end aspect of a website designed to
            track potential COVID-19 infections during to airline travel
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3 as IconProps["src"]} />
          <ServicesH2>AI Tic-Tac-Toe</ServicesH2>
          <ServicesP>
            Initialize this project and play Tic-Tac-Toe against an AI. See how
            well you do!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3 as IconProps["src"]} />
          <ServicesH2>MineSweeper</ServicesH2>
          <ServicesP>
            Initialize this project and play a game of Minesweeper set up in C++
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3 as IconProps["src"]} />
          <ServicesH2>Image Processor</ServicesH2>
          <ServicesP>
            Upload Images into the project and watch how they combine.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3 as IconProps["src"]} />
          <ServicesH2>Fractal</ServicesH2>
          <ServicesP>
            Initialize this project and interact with Fractals through the GUI
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
