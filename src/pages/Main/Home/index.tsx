import * as S from "./style"

import SymbolMark from "@imgs/Symbol-Mark.png"
import AuthButton from "@src/components/Button/AuthButton"


const Home = () => {

    return (
        <>
            <S.Home>
                <S.MainArea>
                    <img src={SymbolMark} alt="Symbol-Marks" className="symbolMark" />
                    <S.AuthArea>
                        <h1 className="title">감정일기</h1>
                        <h2 className="subTitle">지금 나에게 찾아오는 모든 감정을 환영해주세요.</h2>
                        <S.UserWrap>
                            <AuthButton path="/signin" variant="signIn">로그인</AuthButton>
                            <AuthButton path="/signup" variant="signUp">회원가입</AuthButton>
                        </S.UserWrap>
                    </S.AuthArea>
                </S.MainArea>
            </S.Home>
        </>
    )
}

export default Home