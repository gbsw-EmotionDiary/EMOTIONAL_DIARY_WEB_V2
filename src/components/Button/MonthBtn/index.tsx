import * as S from "./style"

type BtnType = {
    children: string
    onClick: () => void;
}

const MonthBtn = ({ children, onClick }: BtnType) => {
    return (
        <S.MonthBtn onClick={onClick}>{children}</S.MonthBtn>
    );
}
export default MonthBtn