// src/features/course-filters/model/courseFiltersSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CourseLevel } from '@/entities/course';
import type { CourseFiltersState } from './types';

const initialState: CourseFiltersState = {
  level: 'all',
  search: '',
  page: 1,
};

const courseFiltersSlice = createSlice({
  name: 'courseFilters',
  initialState,
  reducers: {
    // Задать уровень (A1-C2 или 'all')
    setLevel: (state, action: PayloadAction<CourseLevel | 'all'>) => {
      state.level = action.payload;
      state.page = 1; // При смене уровня сбрасываем на первую страницу
    },
    // Задать строку поиска
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.page = 1; // При поиске сбрасываем на первую страницу
    },
    // Задать номер страницы
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    // Сбросить все фильтры
    resetFilters: (state) => {
      state.level = 'all';
      state.search = '';
      state.page = 1;
    },
  },
});

export const { setLevel, setSearch, setPage, resetFilters } =
  courseFiltersSlice.actions;
export const courseFiltersReducer = courseFiltersSlice.reducer;
