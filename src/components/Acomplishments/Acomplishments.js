import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Acomplishments = () => (
  <Section id="education">
    <SectionDivider/><br/><br/>
    <SectionTitle>Education</SectionTitle>
    <Boxes>
      <Box>
        <BoxText><b>Associate Degree in Computer Science</b></BoxText><br/>
        <BoxText>at Orange Coast College 2020</BoxText>
      </Box>
      <Box>
        <BoxText><b>Bachelor Degree in Computer Science</b></BoxText><br/>
        <BoxText>at California State Fullerton 2023 (expected)</BoxText>
      </Box>
    </Boxes>
  </Section>
);

export default Acomplishments;
