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
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.05);

  transition: background-color 0.25s ease-in, box-shadow 0.25s ease-in;

  &.scrolled {
    background-color: rgba(248, 247, 244, 0.9);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.03);
  }

  & > header {
    width: 100%;
    max-width: 1280px;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media only screen and (max-width: 600px) {
    & > header {
      width: 100%;
      max-width: 480px;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const LoggedInWrap = styled(Link)`
  width: 100%;
  max-width: 180px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .symbolMark {
    max-width: 40px;
  }

  .userId {
    font-size: 15px;
  }

  .desc {
    color: #ff6b6b;
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
    color: #001f3f;
  }
`;

export const AuthWrap = styled.div`
  width: 100%;
  max-width: 110px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthUser = styled.div`
  width: 100%;
  max-width: 200px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthLink = styled(Link)`
  font-size: 15px;
  font-family: 600;

  &:hover {
    color: #82b77f;
  }
`;
