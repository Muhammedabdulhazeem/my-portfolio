import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { myCV } from '../../constants/constants';

const Hero = ( ) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, <br />
        I'm Muhammed Abdulhazeem
      </SectionTitle>
      <SectionText>
        I'm a frontend developer focused on creating beautiful and user friendly applications while writing clean codes.
      </SectionText>
      <a href={myCV} download><Button >Download CV</Button></a> 
    </LeftSection>
  </Section>
);

export default Hero;