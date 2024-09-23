import styled from "styled-components";

export const SignUpArea = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #f8f7f4;
`;

export const WelcomeMessage = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 0 0 0 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;

  .welcomeTitle {
    font-size: 24px;
    color: #191919;
  }

  .welcomeSubTitle {
    padding-top: 5px;

    font-size: 15px;
    color: #9e9ea7;
  }
`;

export const LoginTitle = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  .symbolArea {
    width: 100%;
    padding: 40px 0px 25px 0px;

    display: flex;
    justify-content: center;
  }

  & > h1 {
    padding: 10px 0;

    font-size: 17px;
    border-bottom: #e4e8e8 1px solid;
  }
`;

export const FormWrap = styled.div`
  width: 100%;
  max-width: 480px;
  height: 600px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 20px;

  background-color: #fff;
  border-radius: 10px;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 10px;
  padding: 10px 40px;
  gap: 30px;

  -webkit-user-select: none;
  user-select: none;
`;

export const InputWrap = styled.div`
  .inputDesc {
    color: #9e9ea7;
    font-size: 14px;
  }
`;
