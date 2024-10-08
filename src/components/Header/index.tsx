import * as S from "./style";

import useAuth from "@hooks/useAuth";
import SymbolMark from "@imgs/Symbol-Mark.png";
import { useState, useEffect } from "react";

const Header = () => {
    const { id, isLoggedIn, handleLogout } = useAuth();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <S.HeaderArea className={scrolled ? "scrolled" : ""}>
            <header>
                {isLoggedIn ? (
                    <>
                        <S.LoggedInWrap to={"/home"}>
                            <img src={SymbolMark} alt="symbol-mark" className="symbolMark" />
                            <h1 className="userId"><span className="desc">{id}</span>님, 환영합니다.</h1>
                        </S.LoggedInWrap>
                        <S.AuthUser>
                            <S.AuthLink to={"/"} onClick={handleLogout}>로그아웃</S.AuthLink>
                        </S.AuthUser>
                    </>
                ) : (
                    <>
                        <S.SymobolWrap to={"/"}>
                            <img src={SymbolMark} alt="symbol-mark" className="symbolMark" />
                            <h1 className="title">감정일기</h1>
                        </S.SymobolWrap>
                        <S.AuthWrap>
                            <S.AuthLink to={"/signin"}>로그인</S.AuthLink>
                            <S.AuthLink to={"/signup"}>회원가입</S.AuthLink>
                        </S.AuthWrap>
                    </>
                )}
            </header>
        </S.HeaderArea>
    );
}

export default Header;
