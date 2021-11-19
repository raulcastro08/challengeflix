import React, { useState, useEffect } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Tmdb from "../../pages/api/Tmdb";

const Hero = (props) => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          title
        </SectionTitle>
        <SectionText>description</SectionText>
      </LeftSection>
    </Section>
  );
};

export default Hero;
