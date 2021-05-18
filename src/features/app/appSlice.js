import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  view: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeView: (state, { payload }) => {
      state.view = payload;
    },
  },
});

export const { changeView } = appSlice.actions;

export default appSlice.reducer;
