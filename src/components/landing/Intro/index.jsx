import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Tony and I’m a Fulltack developer!</h4>
          <Button as={AnchorLink} href="#contact">
            Hagamos algo juntos
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Tony and I’m a Fulltack developer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
