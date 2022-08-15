import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  width: ${p => p.theme.sizes.max};
`;