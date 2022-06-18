import React from 'react';
import Link from 'next/link';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi,<br />
        I'm Ondřej Juda
      </SectionTitle>
      <SectionText>
        Welcome to my portfolio page. As a front-end developer, I would like to present you my work. I focus mainly on ReactJS.
      </SectionText>
      <Button onClick={() => window.location = '/#about'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;