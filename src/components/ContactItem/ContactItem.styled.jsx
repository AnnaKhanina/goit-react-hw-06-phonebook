import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
  font-size: ${p => p.theme.fontSizes.s};
`;

export const Button = styled.button`
  margin-left: ${p => p.theme.space[4]}px;
  cursor: pointer;
  font-size: ${p => p.theme.fontSizes.s};
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  transition: color ${p => p.theme.transition.cubic}, background-color ${p => p.theme.transition.cubic};
  &: hover {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.black};
  }
`;