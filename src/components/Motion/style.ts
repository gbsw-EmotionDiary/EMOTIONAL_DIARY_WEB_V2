import styled from "styled-components";
import { motion } from "framer-motion";

export const SymbolArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--main-bg);
`;

export const SymbolMotion = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
