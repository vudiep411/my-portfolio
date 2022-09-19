import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:'white', marginBottom:'20px'}}>
          <DiCssdeck size="3rem"/><Span>My Porfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#education">
          <NavLink>Education</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/vudiep411" target='_blank'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/vu-diep-b91157206/" target='_blank'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/vu_d1ep/?hl=en" target='_blank'>
        <AiFillInstagram size='3rem'/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
