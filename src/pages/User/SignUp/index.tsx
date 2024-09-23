import * as C from "@src/allFiles"
import * as S from "./style"

import useAuth from "@hooks/useAuth";
import { HelmetProvider, Helmet } from "react-helmet-async";

const SignUp = () => {
   const {
      id,
      name,
      password,
      passwordCheck,
      setId,
      setName,
      setPassword,
      setPasswordCheck,
      handleSignUp,
   } = useAuth();

   return (
      <>
         <HelmetProvider>
            <Helmet>
               <title>감정일기 - 로그인</title>
            </Helmet>
         </HelmetProvider>

         <C.Header />
         <S.SignUpArea onSubmit={handleSignUp}>
            <S.WelcomeMessage>
               <h1 className="welcomeTitle">감정일기에 처음오신 여러분을 환영합니다!</h1>
               <h2 className="welcomeSubTitle">오늘부터 여러분의 감정을 기록해 보세요.</h2>
            </S.WelcomeMessage>
            <S.FormWrap>
               <S.SignUpForm action="submit">
                  <S.LoginTitle>
                     <h1>회원가입</h1>
                  </S.LoginTitle>
                  <S.InputWrap>
                     <label className="inputDesc">아이디</label>
                     <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        placeholder="아이디"
                     />
                  </S.InputWrap>
                  <S.InputWrap>
                     <label className="inputDesc">이름</label>
                     <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="이름"
                     />
                  </S.InputWrap>
                  <S.InputWrap>
                     <label className="inputDesc">비밀번호</label>
                     <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호"
                     />
                  </S.InputWrap>
                  <S.InputWrap>
                     <label className="inputDesc">비멀번호 재확인</label>
                     <input
                        type="password"
                        value={passwordCheck}
                        onChange={(e) => setPasswordCheck(e.target.value)}
                        placeholder="비밀번호 재확인"
                     />
                  </S.InputWrap>
                  <C.AuthBtn>회원가입</C.AuthBtn>
                  <C.LinkIn path="/signIn">계정이 있으신가요 ? <span>로그인으로 이동</span></C.LinkIn>
               </S.SignUpForm>
            </S.FormWrap>
         </S.SignUpArea>
      </>
   )
}

export default SignUp