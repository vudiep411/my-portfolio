import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, Welcome to my Portfolio<br/>
        I'm Vu
      </SectionTitle>
      <SectionText>
        I'm currently a 4th year student at California State University, Fullerton
        completing my Bachelors of Science in Computer Science degree. I'm interested in a 
        back-end engineering, front-end engineering, full-stack, web application development.
      </SectionText>
      {/* <Button href="">Learn More</Button> */}
    </LeftSection>
  </Section>
);

export default Hero;