import * as React from "react";

import { Wrapper } from "./styled";
import styled, { css } from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  $primary?: boolean;
  $margin?: string;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: white;
  color: palevioletred;
  font-size: 1.2rem;
  margin: ${(props) => props.$margin || "2rem"};
  padding: 0.5rem 1rem;
  border: 1px solid palevioletred;
  border-radius: 3px;
  ${(props) =>
    props.$primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}
`;

const SuperButton = styled(StyledButton)`
  font-size: 2.5rem;
`;

function Button({ $primary = false, $margin, children }: ButtonProps) {
  console.log($margin);
  return (
    <Wrapper>
      <StyledButton $primary={$primary} $margin={$margin}>
        {children}
      </StyledButton>
    </Wrapper>
  );
  //   return <SuperButton $primary={$primary}>{children}</SuperButton>;
}

export default Button;
