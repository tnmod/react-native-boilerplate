import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppSliceState {
  isDarkMode: boolean;
}

const initialState: AppSliceState = {
  isDarkMode: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {

  },
});

export const {

} = appSlice.actions;
export default appSlice.reducer;
