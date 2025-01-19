import * as React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  children: React.ReactElement | string;
  primary?: boolean;
  bgColor?: string;
}

interface StyledButtonProps {
  $primary?: boolean;
  $bgColor?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  color: #fff;
  outline: none;
  border: none;
  background-color: #333;
  margin-bottom: 1rem;
  ${({ $primary, $bgColor }) =>
    $primary &&
    css`
      color: red;
      background-color: ${$bgColor};
    `}
`;

function Button({ primary, bgColor, children }: ButtonProps) {
  return (
    <StyledButton $primary={primary} $bgColor={bgColor}>
      {children}
    </StyledButton>
  );
}

export default Button;
