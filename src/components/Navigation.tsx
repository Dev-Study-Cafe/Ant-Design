import styled from "styled-components";
import { BUTTON, HOME, ICON, TYPOGRAPHY } from "../navigation/CONSTANTS";

const SContainer = styled.div`
  margin: 10px;
  padding: 5px;
  display: flex;
  border: 1px solid black;
  flex-wrap: wrap;
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

      {/* General */}
      <SLink href={BUTTON}>Button</SLink>
      <SLink href={ICON}>Icon</SLink>
      <SLink href={TYPOGRAPHY}>Typography</SLink>
    </SContainer>
  )
};

export default Navigation;