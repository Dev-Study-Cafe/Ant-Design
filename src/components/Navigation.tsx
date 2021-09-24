import styled from "styled-components";
import { BUTTON, DIVIDER, HOME, ICON, TYPOGRAPHY } from "../navigation/CONSTANTS";

const SContainer = styled.div`
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid black;
`;

const SRowContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 5px;
`;

const SCategory = styled.h4`
  font-size: 20px;
  color: red;
  margin-right: 10px;
`;

const SLink = styled.a`
  margin-left: 5px;
  margin-right: 5px;
  color: blue;
`;

const Navigation = () => {
  return (
    <SContainer>
      <SLink href={HOME}>Home</SLink>

      <SRowContainer>
        <SCategory>General</SCategory>
        <SLink href={BUTTON}>Button</SLink>
        <SLink href={ICON}>Icon</SLink>
        <SLink href={TYPOGRAPHY}>Typography</SLink>
      </SRowContainer>
      
      <SRowContainer>
        <SCategory>Layout</SCategory>
        <SLink href={DIVIDER}>Divider</SLink>
      </SRowContainer>
    </SContainer>
  )
};

export default Navigation;