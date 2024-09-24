import * as C from "@src/allFiles";
import * as S from "./style";

import { Header } from "@src/allFiles";
import useDiary from "@src/hooks/useDiary";
import MonthBtn from "@src/components/Button/MonthBtn";
import ActionBtn from "@src/components/Button/ActionBtn";

import { useState } from "react";
import moment from "moment";

export const emotionColors: { [key: number]: string } = {
    1: "#C9E58B",
    2: "#D4B8E4",
    3: "#95B9D7",
    4: "#D37A7A",
    5: "#F7D5CF",
};

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(moment());
    const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const {
        diaries,
        diaryDto,
        activeEmotion,
        setDiaryDto,
        handleSaveDiary,
        handleDeleteDiary,
        handleInputChange,
        handleEmotionSelect,
    } = useDiary(currentDate);

    const handlePrevMonth = () => {
        setCurrentDate(currentDate.clone().add(-1, "month"));
    };

    const handleNextMonth = () => {
        setCurrentDate(currentDate.clone().add(1, "month"));
    };



    const handleDateClick = (day: moment.Moment) => {
        const formattedDate = day.format("YYYY-MM-DD");
        setSelectedDate(day);
        const existingDiary = diaries[formattedDate] || {};
        setDiaryDto({
            date: formattedDate,
            title: existingDiary.title || "",
            content: existingDiary.content || "",
            emotion: existingDiary.emotion || 0,
        });
        setModalOpen(true);
    };

    const renderDays = () => {
        const startDay = currentDate.clone().startOf("month");
        const endDay = currentDate.clone().endOf("month");
        const days = [];

        for (let i = 0; i < startDay.day(); i++) {
            days.push(
                <S.EmptyDay key={`empty-start-${i}`}></S.EmptyDay>
            );
        }

        let day = startDay.clone();
        while (day.isSameOrBefore(endDay)) {
            const clonedDay = day.clone();
            const isToday = clonedDay.isSame(moment(), "day");
            const isWeekend = clonedDay.day() === 0 || clonedDay.day() === 6;
            const formattedDate = clonedDay.format("YYYY-MM-DD");

            days.push(
                <S.Day
                    key={formattedDate}
                    className={`${isToday ? "today" : ""} ${isWeekend ? "weekend" : ""}`}
                    onClick={() => handleDateClick(clonedDay)}
                >
                    <span>{clonedDay.date()}</span>
                    {diaries[formattedDate] && <S.HasDiary color={emotionColors[diaries[formattedDate].emotion]} />}
                </S.Day>
            );
            day.add(1, "day");
        }

        for (let i = endDay.day(); i < 6; i++) {
            days.push(<S.EmptyDay key={`empty-end-${i}`}></S.EmptyDay>);
        }

        return days;
    };

    return (
        <>
            <Header />
            <S.DiaryArea>
                <S.DiaryWrap>
                    <S.CalendarArea>
                        <S.MonthControl>
                            <MonthBtn onClick={handlePrevMonth}>이전 달</MonthBtn>
                            <h3 className="monthYear">{currentDate.format("YYYY년 M월")}</h3>
                            <MonthBtn onClick={handleNextMonth}>다음 달</MonthBtn>
                        </S.MonthControl>
                        <S.WeekDayControl>
                            {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
                                <div
                                    key={day}
                                    className={`weekDay ${index === 0 || index === 6 ? "weekend" : ""}`}
                                >
                                    {day}
                                </div>
                            ))}
                        </S.WeekDayControl>
                        <S.DaysGrid>{renderDays()}</S.DaysGrid>
                    </S.CalendarArea>
                    {modalOpen && selectedDate && (
                        <S.Modal>
                            <h3 className="todayTitle">{selectedDate.format("YYYY년 M월 D일")}</h3>
                            <input
                                type="text"
                                name="title"
                                value={diaryDto.title}
                                onChange={handleInputChange}
                                placeholder="제목"
                                className="diaryTitle"
                            />
                            <textarea
                                name="content"
                                value={diaryDto.content}
                                onChange={handleInputChange}
                                placeholder="일기 내용을 입력하세요."
                                className="diaryChildren"
                            />
                            <div className="emotionSelector">
                                <S.EmotionGrid>
                                    {[1, 2, 3, 4, 5].map((emotion) => (
                                        <S.EmotionBtn
                                            key={emotion}
                                            onClick={() => handleEmotionSelect(emotion)}
                                            active={activeEmotion === emotion}
                                        >
                                            <C.EmotionIcon emotion={emotion} />
                                        </S.EmotionBtn>
                                    ))}
                                </S.EmotionGrid>
                            </div>
                            <S.ServiceArea>
                                <ActionBtn onClick={handleSaveDiary} variant="save">저장</ActionBtn>
                                {diaries[diaryDto.date] && <ActionBtn onClick={handleDeleteDiary} variant="del">삭제</ActionBtn>}
                                <ActionBtn onClick={() => setModalOpen(false)} variant="cancel">취소</ActionBtn>
                            </S.ServiceArea>
                        </S.Modal>
                    )}
                </S.DiaryWrap>
            </S.DiaryArea>
        </>
    );
}

export default Calendar;
