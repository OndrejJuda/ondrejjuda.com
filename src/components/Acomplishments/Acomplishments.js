import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

import { acomplisments } from '../../constants/constants'

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {acomplisments.map((card, i) => (
        <Box key={i}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
