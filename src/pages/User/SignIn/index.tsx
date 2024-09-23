import * as C from "@src/allFiles"
import * as S from "./style"

import useAuth from "@hooks/useAuth";
import { HelmetProvider, Helmet } from "react-helmet-async";

const SignIn = () => {
   const {
      id,
      password,
      setId,
      setPassword,
      handleSignIn,
   } = useAuth();

   return (
      <>
         <HelmetProvider>
            <Helmet>
               <title>감정일기 - 로그인</title>
            </Helmet>
         </HelmetProvider>

         <C.Header />
         <S.SignInArea onSubmit={handleSignIn}>
            <S.WelcomeMessage>
               <h1 className="welcomeTitle">감정일기에 다시 온 걸 환영해요!</h1>
               <h2 className="welcomeSubTitle">오늘도 하루의 감정을 적어봐요.</h2>
            </S.WelcomeMessage>
            <S.FormWrap>
               <S.SignInForm action="submit">
                  <S.LoginTitle>
                     <div className="symbolArea">
                        <C.Motion />
                     </div>
                     <h1>로그인</h1>
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
                     <label className="inputDesc">비밀번호</label>
                     <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호"
                     />
                  </S.InputWrap>
                  <C.AuthBtn>로그인</C.AuthBtn>
                  <C.LinkIn path="/signUp">아직 회원가입을 안하셨나요 ? <span>회원가입으로 이동</span></C.LinkIn>
               </S.SignInForm>
            </S.FormWrap>
         </S.SignInArea>
      </>
   )
}

export default SignIn