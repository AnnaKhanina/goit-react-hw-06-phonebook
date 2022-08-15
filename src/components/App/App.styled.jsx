import styled from 'styled-components';

export const Container = styled.div`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
`;

export const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const TitleH1 = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const TitleH2 = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
`;