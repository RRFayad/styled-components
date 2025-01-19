"use client";

import styled from "styled-components";

import Button from "./components/Button";

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <MainWrapper>
      <Button primary>Primary Button</Button>
      <Button>Regular Button</Button>
    </MainWrapper>
  );
}
