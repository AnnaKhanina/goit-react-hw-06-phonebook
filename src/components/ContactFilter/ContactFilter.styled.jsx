import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-left: ${p => p.theme.space[4]}px;
`;

export const Input = styled.input`
  width: ${p => p.theme.sizes.s};
  margin-top: ${p => p.theme.space[2]}px;
`;