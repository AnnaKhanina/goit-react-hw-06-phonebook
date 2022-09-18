import styled from '@emotion/styled';

const Button = styled.button`
  display: block;
  padding: 10px 15px;
  width: 30%;
  font-size: 16px;

  background-color: #7741EA;
  color: white;
  border: 2px solid #7741EA;
  border-radius: 2px;
  cursor: pointer;

  transition: color 250ms linear, background-color 250ms linear;

  &:hover {
    color: #7741EA;
    background-color: white;
  }
`;

export default Button;