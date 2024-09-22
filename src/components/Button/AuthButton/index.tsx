import * as S from './style'

import React from 'react'

type BtnType = {
    path: string
    variant: 'signIn' | 'signUp'
    children: React.ReactNode
}

const AuthButton = ({ path, variant, children }: BtnType): React.ReactElement => {
    return (
        <>
            <S.AuthLink to={path} variant={variant}>
                {children}
            </S.AuthLink>
        </>
    )
}

export default AuthButton
