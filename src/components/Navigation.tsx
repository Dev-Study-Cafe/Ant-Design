import styled from "styled-components";
import { HOME } from "../navigation/CONSTANTS";

const SContainer = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

const SLink = styled.a`
  margin-bottom: 5px;
  color: blue;
`;

const Navigation = () => {
  return (
    <SContainer>
      <SLink href={HOME}>HOME</SLink>
    </SContainer>
  )
};

export default Navigation;