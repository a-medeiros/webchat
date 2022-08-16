import styled from 'styled-components';

export const ButtonComponent = styled.button`
  width: 20%;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid ${(props) => props.color};
  background-color: ${(props) => props.color};
`;