import React from 'react';
import { DiFirebase, DiReact, DiStackoverflow } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/><br/><br/>
    <SectionTitle>Skills and Technologies</SectionTitle>
    <SectionText>HTML, CSS, Javascript, React, Express, Node, MySQL, C++, Java, Python</SectionText>
  <List>
    <ListItem>
      <DiReact size='5rem'/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          React.js<br/>
          Bootstrap<br/>
          Next.js <br/>
          CSS tailwind
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiFirebase size='5rem'/>
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          Express.js<br/>
          Java Spring <br/>
          MySQL <br/>
          MongoDB <br/>
          Sanity <br/>
          Django
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiStackoverflow size='5rem'/>
      <ListContainer>
        <ListTitle>Others</ListTitle>
        <ListParagraph>
          Java<br/>
          C++<br/>
          Python<br/>
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>  
  </Section>
);

export default Technologies;
