import { useState, useEffect } from "react";
import moment from "moment";
import Cookies from "js-cookie";
import { writeDiary, modifyDiary, deleteDiary } from "@api/diary";
import { customAxios, postWithToken } from "@src/api/axios";

interface Diary {
  date: Date;
  title: string;
  content: string;
  emotion: number;
  userId?: string | null; // userId를 추가
}

interface DiariesMap {
  [key: string]: Diary;
}

const useDiary = (currentDate: moment.Moment) => {
  const [activeEmotion, setActiveEmotion] = useState<number | null>(null);
  const [diaries, setDiaries] = useState<DiariesMap[]>({});
  const [diaryDto, setDiaryDto] = useState<Diary>({
    date: "",
    title: "",
    content: "",
    emotion: 0,
  });

  // 쿠키에서 사용자 ID를 가져옵니다.
  const userId = Cookies.get("id") || ""; // 기본값을 빈 문자열로 설정

  useEffect(() => {
    const fetchDiarys = async () => {
      try {
        const response = await customAxios.get<DiariesMap[]>("/api/diary/get");
        setDiaries(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDiarys();
  }, []);

  const handleSaveDiary = async () => {
    try {
      const updatedDiaryDto = { ...diaryDto, userId }; // 사용자 ID를 diaryDto에 추가
      if (diaries[diaryDto.date]) {
        await modifyDiary(updatedDiaryDto);
      } else {
        await writeDiary(updatedDiaryDto);
      }
      alert("일기가 저장되었습니다!");
    } catch (error) {
      console.error("일기 저장 실패:", error); // 오류 로그 추가
      alert("일기 저장에 실패했습니다. 다시 시도해 주세요.");
    }
  };

  const handleDeleteDiary = async () => {
    try {
      await postWithToken(token, "/api/diary/write", {
        ... diaryDto.date,
        diaryDto.title,
        diaryDto.content,
        diaryDto.emotion
      });
      alert("일기를 등록했습니다");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDiaryDto((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmotionSelect = (emotion: number) => {
    setDiaryDto((prev) => ({ ...prev, emotion }));
    setActiveEmotion(emotion);
  };

  return {
    diaries,
    diaryDto,
    activeEmotion,
    setDiaryDto,
    handleSaveDiary,
    handleDeleteDiary,
    handleInputChange,
    handleEmotionSelect,
  };
};

export default useDiary;
