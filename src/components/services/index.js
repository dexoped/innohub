import React from "react";
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from "./ServicesElements";
import Icon1 from "../../images/space.svg"
import Icon2 from "../../images/online.svg"
import Icon3 from "../../images/real-time.svg"

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Innovation HUB</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>INNOVATIVE STARTUP</ServicesH2>
          <ServicesP>
            Startups Having Innovative Ideas
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>INNOVATIVE STARTUP</ServicesH2>
          <ServicesP>
          Startups Having Innovative Ideas
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>INNOVATIVE STARTUP</ServicesH2>
          <ServicesP>
          Startups Having Innovative Ideas
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
