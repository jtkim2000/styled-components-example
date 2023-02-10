import styled from "styled-components";

const StyledButton = styled.button`
  ackground: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;

  ${(props) =>
    props.primary &&
    `
      background: palevioletred;
      color: white;
    `}
`;

export default StyledButton;
