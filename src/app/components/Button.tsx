import * as React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactElement | string;
  primary?: boolean;
}

const StyledButton = styled.button<{ $primary?: boolean }>`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  color: ${(props) => (props.$primary ? "red" : "#fff")};
  outline: none;
  border: none;
  background-color: #333;
  margin-bottom: 1rem;
`;

function Button({ primary, children }: ButtonProps) {
  return <StyledButton $primary={primary}>{children}</StyledButton>;
}

export default Button;
