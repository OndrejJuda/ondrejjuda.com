import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

import { technologies } from '../../constants/constants'

const Technologies = () => (
  <Section id='technologies'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with range of technologies related to front-end.
    </SectionText>
    <List>
      {
        technologies.map(({ stack, tech, icon }) => (
          <ListItem>
            {icon}
            <ListContainer>
              <ListTitle>{stack}</ListTitle>
              <ListParagraph>
                {
                  tech.map((tech) => (<>{tech} <br /></>))
                }
              </ListParagraph>
            </ListContainer>
          </ListItem>
        ))
      }
    </List>
  </Section>
);

export default Technologies;
