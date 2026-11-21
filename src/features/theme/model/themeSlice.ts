// src/features/theme/model/themeSlice.ts
// ВРЕМЕННЫЙ СЛАЙС-ЗАГЛУШКА (будет удален или заменен в тикете 5.3)

// src/features/theme/model/themeSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
  mode: 'light' | 'dark';
}

const initialState: ThemeState = {
  mode: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Временный редьюсер для проверки
    toggleMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleMode } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
