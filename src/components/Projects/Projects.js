import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id='projects'>
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project, i) => (
        <BlogCard key={i}>
          <Img src={project.image}/>
          <TitleContent>
            <HeaderThree title="true">{project.title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>{project.description}</CardInfo>
          <div>
            <TagList>
              {project.tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.visit} target='_blank'>Source</ExternalLinks>
            <ExternalLinks href={project.demo} target='_blank'>Demo</ExternalLinks>
            <ExternalLinks href={project.source} target='_blank'>Code</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}        
    </GridContainer>
  </Section>
);

export default Projects;