import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem>vudiep411@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
            <Slogan>Let's Make Something Great!</Slogan>
          </CompanyContainer>
        <SocialContainer>          
          <SocialIcons href="https://github.com/vudiep411" target='_blank'>
            <AiFillGithub size='3rem'/>
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/vu-diep-b91157206/" target='_blank'>
            <AiFillLinkedin size='3rem'/>
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/vu_d1ep/?hl=en" target='_blank'>
            <AiFillInstagram size='3rem'/>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
