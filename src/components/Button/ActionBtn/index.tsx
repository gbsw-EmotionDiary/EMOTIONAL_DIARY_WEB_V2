import * as S from "./style"

type BtnType = {
    children: string
    variant: "save" | "del" | "cancel"
    onClick: () => void;
}

const ActionBtn = ({ children, onClick, variant }: BtnType) => {
    return (
        <S.SaveCancelBtn onClick={onClick} variant={variant}>{children}</S.SaveCancelBtn>
    );
}
export default ActionBtn