import * as S from "./style"

type BtnType = {
    path: string
    variant: 'signIn' | 'signUp'
    children: string
}

const AuthLink = ({ path, variant, children }: BtnType) => {
    return (
        <>
            <S.AuthLink to={path} variant={variant}>
                {children}
            </S.AuthLink>
        </>
    )
}

export default AuthLink
