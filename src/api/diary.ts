import { customAxios } from "@api/axios";

export const getDiaries = async (year: number, month: number): Promise<any> => {
  const response = await customAxios.get(`/api/diary/get`, {
    params: { year, month },
  });
  return response.data;
};

export const writeDiary = async (diaryDto: any): Promise<any> => {
  const response = await customAxios.post(`/api/diary/write`, diaryDto);
  return response.data;
};

export const modifyDiary = async (diaryDto: any): Promise<any> => {
  const response = await customAxios.put(`/api/diary/modify`, diaryDto);
  return response.data;
};

export const deleteDiary = async (diaryDto: any): Promise<any> => {
  const response = await customAxios.delete(`/api/diary/delete`, {
    data: diaryDto,
  });
  return response.data;
};
