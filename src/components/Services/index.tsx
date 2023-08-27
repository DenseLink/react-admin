import type React from "react";

import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServiceStyles";

type IconProps = React.SVGProps<SVGSVGElement> & {
  src: string;
};

const Services = (): JSX.Element => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon2 as IconProps["src"]} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            We help your fess and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1 as IconProps["src"]} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            you can acess our plataform online anywhere in the world.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3 as IconProps["src"]} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            Unlock our special membership card that returns 5% cash back.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
