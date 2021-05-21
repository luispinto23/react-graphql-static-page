import React from 'react';

import Logo from 'components/Logo';
import Button from 'components/Button';
import * as S from './styles';

import { gaEvent } from 'utils/ga';
import Container from 'components/Container';
import { HeaderProps, LogoProps } from 'types/api';
import { getImageUrl } from 'utils/getImageUrl';

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' });

type Props = {
  logo: LogoProps;
  header: HeaderProps;
};

const SectionHero = ({ logo, header }: Props) => {
  const { title, description, button: headerButton, image: headerImg } = header;
  return (
    <S.Wrapper>
      <Container>
        <Logo {...logo} />

        <S.Content>
          <S.TextBlock>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.ButtonWrapper>
              <Button href={headerButton.url} onClick={onClick} wide>
                {headerButton.label}
              </Button>
            </S.ButtonWrapper>
          </S.TextBlock>

          <S.Image
            src={getImageUrl(headerImg.url)}
            alt={headerImg.alternativeText}
          />
        </S.Content>
      </Container>
    </S.Wrapper>
  );
};

export default SectionHero;
