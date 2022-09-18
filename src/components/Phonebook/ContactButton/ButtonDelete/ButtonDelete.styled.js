import styled from '@emotion/styled';

const ButtonDeleteStyle = styled.button`
  margin-left: 10px;
  background-color: #1d143b;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: color 250ms linear, background-color 250ms linear;

  &: hover {
    background-color: white;
    color: #1d143b;
  }
`;

export default ButtonDeleteStyle;