import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkIn = styled(Link)`
  text-align: center;

  color: #9e9ea7;
  font-size: 14px;

  & > span {
    text-decoration: underline;
  }
`;
