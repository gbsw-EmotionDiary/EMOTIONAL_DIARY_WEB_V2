import * as S from "./style"

type BtnType = {
    children: string
}

const AuthBtn = ({ children }: BtnType) => {
    return (
        <>
            <S.AuthBtn type="submit">{children}</S.AuthBtn>
        </>
    )
}
export default AuthBtn;