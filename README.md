# styled-components

[Youtube Link](https://www.youtube.com/watch?v=c5-Vex3ufFU)

### Creating a Styled Component

```javascript
import * as React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  $primary?: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: white;
  color: palevioletred;
  font-size: 1.2rem;
  margin: 0.5rem 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid palevioletred;
  border-radius: 3px;
  ${({ $primary }) =>
    $primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}
`;

function Button({ $primary = false, children }: ButtonProps) {
  return <StyledButton $primary={$primary}>{children}</StyledButton>;
}

export default Button;
```

Obs.:

- use $ when naming styled component props (to avoid class name DOM error);
- use the `css`to dynamically define status;
- Always define the styled component out of the component (it would cost performance)

#### Extending a Styled Component

```
const SuperButton = styled(StyledButton)`
  font-size: 2.5rem;
`;
```
