import * as C from "@src/allFiles"
import * as S from "./style"

import SymbolMark from "@imgs/Symbol-Mark.png"

const Landing = () => {

    return (
        <>
            <C.Header />
            <S.Landing>
                <S.MainArea>
                    <img src={SymbolMark} alt="Symbol-Marks" className="symbolMark" />
                    <S.AuthArea>
                        <h1 className="title">감정일기</h1>
                        <h2 className="subTitle">"지금 찾아오는 <span className="emphasis">모든 감정</span>을 환영해주세요."</h2>
                        <S.UserWrap>
                            <C.AuthLink path="/signin" variant="signIn">로그인</C.AuthLink>
                            <C.AuthLink path="/signup" variant="signUp">회원가입</C.AuthLink>
                        </S.UserWrap>
                    </S.AuthArea>
                </S.MainArea>
            </S.Landing>
        </>
    )
}

export default Landing