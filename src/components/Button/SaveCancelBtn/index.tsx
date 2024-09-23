import * as S from "./style"

type BtnType = {
    children: string
    onClick: () => void;
}

const SaveCancelBtn = ({ children, onClick }: BtnType) => {
    return (
        <S.SaveCancelBtn onClick={onClick}>{children}</S.SaveCancelBtn>
    );
}
export default SaveCancelBtn