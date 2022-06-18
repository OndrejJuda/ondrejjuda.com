import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        {/* <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:ondra.juda@gmail.com'>ondra.juda@gmail.com</LinkItem>
        </LinkColumn> */}
      </LinkList>
      <SocialIconsContainer>
        {/* <CompanyContainer>
          <Slogan>Pushing boundaries to the infinity and beyond</Slogan>
        </CompanyContainer> */}
        <SocialContainer>
          <SocialIcons href='https://github.com/OndrejJuda'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/ondrej-juda/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://www.instagram.com/ondrajuda/'>
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
