import styled from "styled-components";

export const Day = styled.div`
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  position: relative;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f5f5f5;
  }

  &.today {
    background-color: #e8f5e9;
    font-weight: bold;
  }

  &.weekend {
    color: #f44336;
  }
`;

export const HasDiary = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 8px;
  height: 8px;
  background-color: #4caf50;
  border-radius: 50%;
`;

export const EmptyDay = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
`;

export const DiaryArea = styled.div`
  max-width: 700px;
  height: 100vh;
  margin: 0 auto;
  padding-top: 100px;
  font-family: Arial, sans-serif;
`;

export const CalendarArea = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

export const MonthControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .monthYear {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const WeekDayControl = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-bottom: 10px;

  .weekDay {
    text-align: center;
    font-weight: bold;
    color: #333;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;

  .todayTitle {
    margin-top: 0;
    margin-bottom: 15px;
  }

  .diaryTitle {
    width: 92%;
    margin-bottom: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical;
  }

  .diaryChildren {
    width: 92%;
    height: 150px;
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical;
    outline: none;
  }
`;

export const EmotionGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5px;
`;

export const EmotionBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 50px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  color: #333;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }

  &.selected {
    background-color: #fff;
    color: white;
  }
`;

export const ServiceArea = styled.div`
  padding-top: 30px;
`;
