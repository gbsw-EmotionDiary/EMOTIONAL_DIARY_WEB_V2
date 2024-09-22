import { Link } from "react-router-dom";
import styled from "styled-components";

type VariantType = {
  variant: "signIn" | "signUp";
};

export const AuthLink = styled(Link)<VariantType>`
  width: 150px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 13px;
  font-weight: 500;

  border: ${({ variant }) =>
    variant === "signIn" ? "none" : "2px solid #C9E58B"};
  border-radius: 10px;

  background-color: ${({ variant }) =>
    variant === "signIn" ? "#C9E58B" : "none"};
  color: ${({ variant }) => (variant === "signIn" ? "#ffffff" : "#000000")};

  transition: background-color 0.15s ease-in, box-shadow 0.15s ease-in;

  &:hover {
    background-color: ${({ variant }) =>
      variant === "signIn" ? "#B8D47A" : "none"};

    box-shadow: ${({ variant }) =>
      variant === "signUp" ? "0 8px 15px rgba(0, 0, 0, 0.08)" : "none"};
  }
`;
