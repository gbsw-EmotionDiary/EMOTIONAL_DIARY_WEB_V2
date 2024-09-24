import { useState, useEffect } from "react";
import moment from "moment";
import { getDiaries, writeDiary, modifyDiary, deleteDiary } from "@api/diary";

interface Diary {
  date: string;
  title: string;
  content: string;
  emotion: number;
}

interface DiariesMap {
  [key: string]: Diary;
}

const useDiary = (currentDate: moment.Moment) => {
  const [activeEmotion, setActiveEmotion] = useState<number | null>(null);
  const [diaries, setDiaries] = useState<DiariesMap>({});
  const [diaryDto, setDiaryDto] = useState<Diary>({
    date: "",
    title: "",
    content: "",
    emotion: 0,
  });

  useEffect(() => {
    fetchDiaries();
  }, [currentDate]);

  const fetchDiaries = async () => {
    try {
      const data = await getDiaries(
        currentDate.year(),
        currentDate.month() + 1
      );
      const diariesMap: DiariesMap = {};
      data.forEach((diary: Diary) => {
        diariesMap[moment(diary.date).format("YYYY-MM-DD")] = diary;
      });
      setDiaries(diariesMap);
    } catch (error) {
      alert("일기를 가져오는 중 오류가 발생했습니다.");
    }
  };

  const handleSaveDiary = async () => {
    try {
      if (diaries[diaryDto.date]) {
        await modifyDiary(diaryDto);
      } else {
        await writeDiary(diaryDto);
      }
      fetchDiaries();
      alert("일기가 저장되었습니다!");
    } catch (error) {
      alert("일기 저장에 실패했습니다.");
    }
  };

  const handleDeleteDiary = async () => {
    try {
      await deleteDiary(diaryDto);
      fetchDiaries();
    } catch (error) {
      alert("일기 삭제에 실패했습니다.");
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
    fetchDiaries,
    handleSaveDiary,
    handleDeleteDiary,
    handleInputChange,
    handleEmotionSelect,
  };
};

export default useDiary;
