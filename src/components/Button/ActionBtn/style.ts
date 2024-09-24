import styled from "styled-components";

type VariantType = {
  variant: "save" | "del" | "cancel";
};

export const SaveCancelBtn = styled.button<VariantType>`
  background-color: ${({ variant }) =>
    variant === "save" ? "#27ae60" : variant === "del" ? "#C0382B" : "#808080"};
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "save"
        ? "#229954"
        : variant === "del"
        ? "#A93226"
        : "#696969"};
  }
`;
