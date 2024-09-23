import * as S from "./style"

import Anger from "@imgs/Anger.png";
import Fear from "@imgs/Fear.png";
import Joy from "@imgs/Joy.png";
import Lovely from "@imgs/Lovely.png";
import Sadness from "@imgs/Sadness.png";

interface EmotionIconProps {
  emotion: number;
}

const EmotionIcon: React.FC<EmotionIconProps> = ({ emotion }) => {
  const emotionImages = [Joy, Fear, Sadness, Anger, Lovely];
  const altText = ["Joy", "Fear", "Sadness", "Anger", "Lovely"];

  return <S.EmotionIcons src={emotionImages[emotion - 1]} alt={altText[emotion - 1]} />;
};

export default EmotionIcon
