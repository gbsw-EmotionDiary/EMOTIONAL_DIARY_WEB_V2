import * as S from "./style"

import React from "react"

type LinkType = {
    path: string
    children: React.ReactNode
}

const LinkIn = ({ path, children }: LinkType) => {
    return (
        <>
            <S.LinkIn to={path}>
                {children}
            </S.LinkIn>
        </>
    )
}
export default LinkIn;