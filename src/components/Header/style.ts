import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderArea = styled.header`
  width: 100%;
  height: 65px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  z-index: 10;

  background-color: #f8f7f4;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.07);

  transition: background-color 0.25s ease-in, box-shadow 0.25s ease-in;

  &.scrolled {
    background-color: rgba(244, 244, 244, 0.9);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.01);
  }

  & > header {
    width: 100%;
    max-width: 1280px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SymobolWrap = styled(Link)`
  width: 100%;
  max-width: 125px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .symbolMark {
    max-width: 40px;
  }

  .title {
    font-family: "SBAggroB";
    font-size: 18px;
  }
`;
export const AuthWrap = styled.div`
  width: 100%;
  max-width: 110px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthLink = styled(Link)`
  font-size: 15px;
  font-family: 600;

  &:hover {
    color: #a3bf63;
  }
`;
