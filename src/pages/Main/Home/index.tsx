import * as S from "./style"

import { Header } from "@src/allFiles";
import useDiary from "@src/hooks/useDiary";
import MonthBtn from "@src/components/Button/MonthBtn";
import SaveCancelBtn from "@src/components/Button/SaveCancelBtn";
import EmotionIcon from "@src/assets/EmotionIcon";

import { useState } from "react";
import moment from "moment";

function Calendar() {
    const [currentDate, setCurrentDate] = useState(moment());
    const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const {
        diaries,
        diaryDto,
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
                    className={`${isToday ? "today" : ""} ${isWeekend ? "weekend" : ""
                        }`}
                    onClick={() => handleDateClick(clonedDay)}
                >
                    <span>{clonedDay.date()}</span>
                    {diaries[formattedDate] && <S.HasDiary></S.HasDiary>}
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
                <S.CalendarArea>
                    <S.MonthControl>
                        <MonthBtn onClick={handlePrevMonth}>
                            이전 달
                        </MonthBtn>
                        <h3 className="monthYear">
                            {currentDate.format("YYYY년 M월")}
                        </h3>
                        <MonthBtn onClick={handleNextMonth}>
                            다음 달
                        </MonthBtn>
                    </S.MonthControl>
                    <S.WeekDayControl>
                        {["일", "월", "화", "수", "목", "금", "토"].map((day, index) => (
                            <div
                                key={day}
                                className={`${"weekDay"} ${index === 0 || index === 6 ? "weekend" : ""}`}
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
                                        className={diaryDto.emotion === emotion ? "selected" : ""}
                                    >
                                        <EmotionIcon emotion={emotion} />
                                    </S.EmotionBtn>
                                ))}
                            </S.EmotionGrid>
                        </div>
                        <S.ServiceArea>
                            <SaveCancelBtn onClick={handleSaveDiary}>저장</SaveCancelBtn>
                            {diaries[diaryDto.date] && <SaveCancelBtn onClick={handleDeleteDiary}>삭제</SaveCancelBtn>}
                            <SaveCancelBtn onClick={() => setModalOpen(false)}>취소</SaveCancelBtn>
                        </S.ServiceArea>

                    </S.Modal>

                )}
            </S.DiaryArea>
        </>
    );
}

export default Calendar;
