import * as C from "@src/allFiles"
import * as S from "./style"

import React from "react";

const Motion = React.memo(() => {
    return (
        <S.SymbolArea>
            <S.SymbolMotion
                initial={{ rotate: "-60deg", scale: 2 }}
                animate={{ rotate: "0deg", scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ display: "flex", gap: "10px" }}
            >
                <C.EmotionIcons />
            </S.SymbolMotion>
        </S.SymbolArea>
    );
});
export default Motion
