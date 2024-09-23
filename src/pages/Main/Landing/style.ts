import styled from "styled-components";

export const Landing = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #f8f7f4;
`;

export const MainArea = styled.main`
  width: 100%;
  max-width: 900px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > .symbolMark {
    width: 200px;
    height: 200px;
  }
`;

export const AuthArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-family: "SBAggroB";
    font-size: 35px;
  }

  .subTitle {
    font-size: 17px;
  }

  .emphasis {
    color: #e58b8b;
  }
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 40px;
  gap: 15px;
`;
