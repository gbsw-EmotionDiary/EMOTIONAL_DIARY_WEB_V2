import * as S from "./style"

import Anger from "@imgs/Anger.png";
import Fear from "@imgs/Fear.png";
import Joy from "@imgs/Joy.png";
import Lovely from "@imgs/Lovely.png";
import Sadness from "@imgs/Sadness.png";

const EmotionMarks = [Anger, Fear, Joy, Lovely, Sadness];

const getRandomEmotion = (): string => {
    const randomIndex = Math.floor(Math.random() * EmotionMarks.length)
    return EmotionMarks[randomIndex]
}

const EmotionIcons = () => {
    return (
        <S.Symbol src={getRandomEmotion()} alt="emotions" draggable={false} />
    )
}
export default EmotionIcons;